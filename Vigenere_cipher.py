def vigenere_cipher_decrypter(str, keyword):
    list_alphabet_uppercase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 
                               'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
    list_alphabet_lowercase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
                               'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
    str_to_char = list(str)
    keyword_to_char = list(keyword)
    answer_cipher = [] 
    keyword_length = len(keyword)
    keyword_index = 0
    reference_offset = 13
    
    for i in str_to_char:
        if i not in list_alphabet_lowercase and i not in list_alphabet_uppercase:
            answer_cipher.append(i)
        else:
            if keyword_to_char[keyword_index] not in list_alphabet_lowercase and keyword_to_char[keyword_index] not in list_alphabet_uppercase:
                keyword_index += 1
                if keyword_index > keyword_length - 1:
                    keyword_index = 0
            if keyword_to_char[keyword_index] in list_alphabet_lowercase:
                offset = list_alphabet_lowercase.index(keyword_to_char[keyword_index])
            elif keyword_to_char[keyword_index] in list_alphabet_uppercase:
                offset = list_alphabet_uppercase.index(keyword_to_char[keyword_index])
           
            if i in list_alphabet_uppercase:
                offset_correction = (reference_offset - offset) + reference_offset
                if list_alphabet_uppercase.index(i) < offset_correction:
                    add = list_alphabet_uppercase.index(i)
                    answer_cipher.append(list_alphabet_uppercase[add + offset])
                elif list_alphabet_uppercase.index(i) >= offset_correction:
                    substract = list_alphabet_uppercase.index(i)
                    answer_cipher.append(list_alphabet_uppercase[substract - offset_correction])
                if keyword_index < keyword_length - 1:
                    keyword_index += 1
                else:
                    keyword_index = 0
 
            if i in list_alphabet_lowercase:
                offset_correction = (reference_offset - offset) + reference_offset
                if list_alphabet_lowercase.index(i) < offset_correction:
                    add = list_alphabet_lowercase.index(i)
                    answer_cipher.append(list_alphabet_lowercase[add + offset])
                elif list_alphabet_lowercase.index(i) >= offset_correction:
                    substract = list_alphabet_lowercase.index(i)
                    answer_cipher.append(list_alphabet_lowercase[substract - offset_correction])
                if keyword_index < keyword_length - 1:
                    keyword_index += 1
                else:
                    keyword_index = 0
    return ''.join(answer_cipher)
            
print(vigenere_cipher_decrypter('D twk g ahnynrwm hpzp ghah kdknxie', 'Foetus Interruptus Nail'))

def vigenere_cipher_encrypter(str, keyword):
    list_alphabet_uppercase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 
                               'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
    list_alphabet_lowercase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
                               'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
    str_to_char = list(str)
    keyword_to_char = list(keyword)
    answer_cipher = [] 
    keyword_length = len(keyword)
    keyword_index = 0
    reference_offset = 13
    
    for i in str_to_char:
        if i not in list_alphabet_lowercase and i not in list_alphabet_uppercase:
            answer_cipher.append(i)
        else:
            if keyword_to_char[keyword_index] not in list_alphabet_lowercase and keyword_to_char[keyword_index] not in list_alphabet_uppercase:
                keyword_index += 1
                if keyword_index > keyword_length - 1:
                    keyword_index = 0
            if keyword_to_char[keyword_index] in list_alphabet_lowercase:
                offset = list_alphabet_lowercase.index(keyword_to_char[keyword_index])
            elif keyword_to_char[keyword_index] in list_alphabet_uppercase:
                offset = list_alphabet_uppercase.index(keyword_to_char[keyword_index])
           
            if i in list_alphabet_uppercase:
                offset_correction = offset
                if list_alphabet_uppercase.index(i) >= offset_correction:
                    add = list_alphabet_uppercase.index(i)
                    answer_cipher.append(list_alphabet_uppercase[add - offset_correction])
                elif list_alphabet_uppercase.index(i) < offset_correction:
                    substract = list_alphabet_uppercase.index(i)
                    answer_cipher.append(list_alphabet_uppercase[substract - offset])
                if keyword_index < keyword_length - 1:
                    keyword_index += 1
                else:
                    keyword_index = 0

            if i in list_alphabet_lowercase:
                offset_correction = offset
                if list_alphabet_lowercase.index(i) >= offset_correction:
                    add = list_alphabet_lowercase.index(i)
                    answer_cipher.append(list_alphabet_lowercase[add - offset_correction])
                elif list_alphabet_lowercase.index(i) < offset_correction:
                    substract = list_alphabet_lowercase.index(i)
                    answer_cipher.append(list_alphabet_lowercase[substract - offset])
                if keyword_index < keyword_length - 1:
                    keyword_index += 1
                else:
                    keyword_index = 0
    return ''.join(answer_cipher)
            

print(vigenere_cipher_encrypter('I had a sparring with this program', 'Foetus Interruptus Nail'))
