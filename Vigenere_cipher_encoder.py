def vigenere_cipher_encoder(str, keyword):
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
            if i in list_alphabet_uppercase:
                if keyword_to_char[keyword_index] not in list_alphabet_lowercase and keyword_to_char[keyword_index] not in list_alphabet_uppercase:
                    keyword_index += 1
                    if keyword_index > keyword_length - 1:
                        keyword_index = 0
                if keyword_to_char[keyword_index] in list_alphabet_lowercase:
                    offset = list_alphabet_lowercase.index(keyword_to_char[keyword_index])
                elif keyword_to_char[keyword_index] in list_alphabet_uppercase:
                    offset = list_alphabet_uppercase.index(keyword_to_char[keyword_index])
                offset_correction = (reference_offset + offset) - reference_offset
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
                if keyword_to_char[keyword_index] not in list_alphabet_lowercase and keyword_to_char[keyword_index] not in list_alphabet_uppercase:
                    keyword_index += 1
                    if keyword_index > keyword_length - 1:
                        keyword_index = 0
                if keyword_to_char[keyword_index] in list_alphabet_lowercase:
                    offset = list_alphabet_lowercase.index(keyword_to_char[keyword_index])
                elif keyword_to_char[keyword_index] in list_alphabet_uppercase:
                    offset = list_alphabet_uppercase.index(keyword_to_char[keyword_index])
                offset_correction = (reference_offset + offset) - reference_offset
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
            

print(vigenere_cipher_encoder('I had a sparring with this program', 'Foetus Interruptus Nail'))

#Barry is the spy
#You were able to decode this? Nice work! You are becoming quite the expert at crytography!

#'Ymlok cp fbb ejv', 'Dog'
#'Txm srom vkda gl lzlgzr qpdb? Fepb ejac! Ubr imn tapludwy mhfbz cza ruxzal wg zztcgcexxch!', 'Friends'