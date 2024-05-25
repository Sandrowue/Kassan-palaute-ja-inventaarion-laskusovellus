def ceasar_cipher(str, offset):
    str_to_char = list(str)
    list_alphabet_uppercase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 
                               'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
    list_alphabet_lowercase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
                               'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
    answer_cipher = []
    reference_offset = 13
    offset_correction = (reference_offset - offset) + reference_offset # then add or decrease offset_correction to index
    for i in str_to_char:
        if i not in list_alphabet_uppercase and i not in list_alphabet_lowercase:
            answer_cipher.append(i)
        elif i in list_alphabet_uppercase:
            if list_alphabet_uppercase.index(i) < offset_correction:
                add = list_alphabet_uppercase.index(i)
                answer_cipher.append(list_alphabet_uppercase[add + offset])
            elif list_alphabet_uppercase.index(i) >= offset_correction:
                substract = list_alphabet_uppercase.index(i)
                answer_cipher.append(list_alphabet_uppercase[substract - offset_correction])
        elif i in list_alphabet_lowercase:
            if list_alphabet_lowercase.index(i) < offset_correction:
                add = list_alphabet_lowercase.index(i)
                answer_cipher.append(list_alphabet_lowercase[add + offset])
            elif list_alphabet_lowercase.index(i) >= offset_correction:
                substract = list_alphabet_lowercase.index(i)
                answer_cipher.append(list_alphabet_lowercase[substract - offset_correction])
    return ''.join(answer_cipher)

def loop_through_ceasar(str):
    for i in range(26):
        print(ceasar_cipher(str, i), i)

