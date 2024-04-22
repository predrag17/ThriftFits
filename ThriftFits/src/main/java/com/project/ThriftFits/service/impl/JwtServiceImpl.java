package com.project.ThriftFits.service.impl;

import com.project.ThriftFits.service.JwtService;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.io.Decoders;
import io.jsonwebtoken.security.Keys;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;

import java.security.Key;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;
import java.util.function.Function;

@Service
public class JwtServiceImpl implements JwtService {

    private static final String SECRET_KEY = "7125e7d0b3e6fcd5fe87610bebc196c598c540f44cf971bd83a4a29f9d91cbc673eac346fce0e576dae155f75f886264272e8157bb1c9828cc6d6469e8a8e435a387b871a8cbd012ce67f27af2fbb27825548fd9b06dc09c600ef4902d8d5c77acb71c76a53f47e55cbfc18c9d02b5a2087909840de08f59af2c5ae9d52461b393bf320d960f45472a57e3fdd9673a5528b274c009fb1ec3ac6c0fa00388df377606ce3e015916b714b56953f855f314b34cebf1032d59df1cffa655faa0bce683a5db8f1842f6ea4d7ffd3e68e6cb56f767ffa08c756f0129a588de8318864a5020e88de737462bb22cac123adb7a17fc0da838036014643fe66e6c2b8aa3e1";

    @Override
    public String extractUsername(String jwtToken) {
        return extractClaim(jwtToken, Claims::getSubject);
    }

    public <T> T extractClaim(String jwtToken, Function<Claims, T> claimsResolver) {
        final Claims claims = extractAllClaims(jwtToken);

        return claimsResolver.apply(claims);
    }

    public String generateJwtToken(UserDetails userDetails) {
        return generateToken(new HashMap<>(), userDetails);
    }

    public String generateToken(
            Map<String, Object> extraClaims,
            UserDetails userDetails
    ) {
        Date issuedDate = new Date();
        Date expirationDate = new Date(issuedDate.getTime() + (1000 * 60 * 24));

        return Jwts.builder()
                .setClaims(extraClaims)
                .setSubject(userDetails.getUsername())
                .setIssuedAt(issuedDate)
                .setExpiration(expirationDate)
                .signWith(getSignInKey(), SignatureAlgorithm.HS256)
                .compact();
    }

    public boolean isTokenValid(String jwtToken, UserDetails userDetails) {
        final String username = extractUsername(jwtToken);

        return (username.equals(userDetails.getUsername())) && !isTokenExpired(jwtToken);
    }

    private boolean isTokenExpired(String jwtToken) {
        return extractExpiration(jwtToken).before(new Date(System.currentTimeMillis()));
    }

    private Date extractExpiration(String jwtToken) {
        return extractClaim(jwtToken, Claims::getExpiration);
    }

    private Claims extractAllClaims(String jwtToken) {
        return Jwts
                .parser()
                .setSigningKey(getSignInKey())
                .parseClaimsJws(jwtToken)
                .getBody();
    }

    private Key getSignInKey() {
        byte[] keyBytes = Decoders.BASE64.decode(SECRET_KEY);
        return Keys.hmacShaKeyFor(keyBytes);
    }
}
