import React from 'react'
import { View, Text, TextInput, StyleSheet } from 'react-native'

const Input = ({label, iconName, error, password, vpassword, onFocus = () => {}, ...props}) => {
   
    const [isFocused, setIsFocused] = React.useState(false);
    const [hidePassword, setHidePassword] = React.useState(password);
    const [hideVPassword, setHideVPassword] = React.useState(vpassword);

     return (
        <View style={{marginBottom: 20}}>
                <Text style={style.label}>{label}</Text>
                <View style={[style.inputContainer, {borderColor: error ? "red": "black"}]}>
                    <TextInput
                    secureTextEntry={hidePassword}
                    autoCorrect={false}
                    onFocus={() => {
                        onFocus();
                        setIsFocused(true);
                    }}
                    onBlur={() => {
                        setIsFocused(false);
                    }}
                    style={{color: "black", flex: 1}}
                    {...props}
                />
                {password && (
                <Icon 
                    onPress={()=>setHidePassword(!password)}
                    style={{fontSize: 22, color:"black"}}
                    name={hidePassword ? 'eye-outline' : 'eye-off-outline'}
                />
                )}
                {vpassword && (
                <Icon 
                    onPress={()=>setHideVPassword(!vpassword)}
                    style={{fontSize: 22, color:"black"}}
                    name={hideVPassword ? 'eye-outline' : 'eye-off-outline'}
                />
                )}
        </View>
        {error && (
        <Text style={{marginTop: 7, color: "red", fontSize: 12}}>
             {error}
        </Text>
        )}
    </View>
       
    );
};

const style = StyleSheet.create({
    label: {
        marginVertical: 5,
        fontSize: 14,
        color: "black",
    },
    inputContainer: {
        height: 55,
        backgroundColor: "white",
        flexDirection: 'row',
        marginHorizontal: 15,
        borderWidth: 0.5,
        alignItems: 'center',
    },
});

export default Input;