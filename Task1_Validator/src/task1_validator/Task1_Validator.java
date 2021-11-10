/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package task1_validator;

import java.util.HashMap;
import java.util.Iterator;
import java.util.Map;

/**
 *
 * @author Milica
 */
public class Task1_Validator {

    /**
     * @param args the command line arguments
     */
    
    
   public static void validatePassword(String password){
        if(password.length() < 6){
            System.out.println("Password is too short; ");
        }
        if(password.length() > 24){
            System.out.println("Password is too long; ");
        }
        boolean spec = true;
        if(password.matches(".*[! “ # $ % & ‘ ( ) = * ? + @ { } [ ] : ;]*.") == false){
            spec = false;
            System.out.println("Missing special characters; ");
         }
        HashMap<Character, Integer> countMap = new HashMap<Character, Integer>();
        int upperCase = 0;
        int lowerCase = 0;
        int digit = 0;
        int marks = 0;
         for (int i =0; i< password.length(); i++) 
        {
            if(Character.isUpperCase(password.charAt(i)) == true){
                upperCase++;
            }
            if(Character.isLowerCase(password.charAt(i)) == true){
               lowerCase++;
            }
            if(Character.isDigit(password.charAt(i)) == true){
                digit++;
            }
            if (countMap.containsKey(password.charAt(i)))
            {
                countMap.put(password.charAt(i), countMap.get(password.charAt(i))+1);
            }
            else
            {
                countMap.put(password.charAt(i), 1);
            }
        }
         if(lowerCase == 0){
             System.out.println("Missing lowercase; ");
         }
         if(upperCase == 0){
             System.out.println("Missing uppercase; ");
         }
         if(digit == 0){
             System.out.println("Missing number; ");
         }
         Iterator hmIterator = countMap.entrySet().iterator();
        while(hmIterator.hasNext()) 
        {
            Map.Entry mapElement = (Map.Entry)hmIterator.next();
             marks = (int)mapElement.getValue();
            if(marks > 2)
            {
                System.out.println("Character is repeated more than twice; ");
                break;
            }
        }
        if(upperCase > 0 && lowerCase > 0 && digit > 0 && password.length() > 6 
                && password.length() < 24 && marks <=2 && spec == true){
            System.out.println("Password is valid!; ");
        }
       

        
    }
    
    public static void main(String[] args) {
        // TODO code application logic here
        validatePassword("jd!n7lm#D");
    }
    
}
