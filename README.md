# PASSWORDGENERATOR
DEBUGGING PASSWORDGENERATOR
# Debugging-Password-Generator
Debugging Password Generator

I started with the information already provided as my base for HTML/CSS.

Creating the javascript :
    1.) created the variables of characters in which the generator can choose from.
        *special characters included: ! # $ % & * + ? @ ~
        *upper case characters include: A-Z
        *lower case characters include: a-z
        *numerical characters include: 0-9
    2.)created a function that will populate with questions on what to include in the new password.*length of the password desired?
        * message will be prompted to ask how long the user wants their new password length to be.
        * minimum of 8 characters long
        * maximum of 128 characters long
    *will upper case letters be include?
        *OK button to include
        *Cancel button to skip
    *will lower case letters be include?
        *OK button to include
        *Cancel button to skip
    *will numbers be included?
        *OK button to include
        *Cancel button to skip
    *will special characters be included?
        *OK button to include
        *Cancel button to skip
    *error message will display 'Must include ONE character type!' if they skip all choices.
    *once length is chosen the option of specific characters will be prompted;
        *OK to include: *CANCEL to skip.
            *UPPERCASE LETTERS
            *LOWERCASE LETTERS
            *NUMERICAL CHARACTERS
            *SPECIAL CHARACTERS
    *created random selection function to create password out of the selected characters
    * created function to put together the new password
        *the choices variable contain character specifics.
    



