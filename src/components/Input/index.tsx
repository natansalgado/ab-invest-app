import { TextInput } from 'react-native';

import { styles } from './styles';

interface Props {
    value: string;
    valueKey: string;
    onChangeText: (key: string, value: string) => void;
    placeHolder?: string;
    keyBoardType: 'email-address' | 'phone-pad' | 'numeric' | 'default';
    password?: boolean;
    unavailable?: boolean;
}

export function Input({ value, placeHolder, valueKey, onChangeText, keyBoardType, password, unavailable }: Props) {
    return (
        <TextInput
            style={[styles.input, unavailable && styles.unavailable]}
            placeholder={placeHolder}
            value={value}
            keyboardType={keyBoardType}
            onChangeText={(value) => onChangeText(valueKey, value)}
            secureTextEntry={password}
            maxLength={keyBoardType == 'phone-pad' ? 11 : 100}
        />
    );
}