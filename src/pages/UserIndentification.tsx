import React, { useState } from 'react'

import { useNavigation } from '@react-navigation/core'
import {
    SafeAreaView,
    StyleSheet,
    Text,
    TextInput,
    View,
    KeyboardAvoidingView,
    Platform,
    TouchableWithoutFeedback,
    Keyboard,
    Alert
} from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'

import { Button } from '../components/Button'

import colors from '../styles/colors'
import fonts from '../styles/fonts'

export function UserIndetification() {
    const navigation = useNavigation()
    const [isFocused, setIsFocused] = useState(false)
    const [isFilled, setIsfilled] = useState(false)
    const [name, setName] = useState<string>()

    function handleInputFocus() {
        setIsFocused(true)
    }

    function handleInputBlur() {
        setIsFocused(false)
        setIsfilled(!!name)
    }

    function handleInputChange(value: string) {
        setIsfilled(!!value);
        setName(value)
    }

    async function handleSubmit() {
        if (!name)
            return Alert.alert('Me diz como chamar você  😥')
            try {
                await AsyncStorage.setItem('@plantmaneger:user', name)
                navigation.navigate('Confirmation',{
                    title:'Prontinho',
                    subtitle:'Agora vamos começar a cuidar das suas plantinhas com muito cuidado.',
                    buttonTitle:'Começar',
                    icon:'smile',
                    nextScreen:'PlantSelect'
                })
            } catch{
                Alert.alert('Não foi possível salvar o seu nome 😥')
            }
    
    }


    return (
        <KeyboardAvoidingView
            style={styles.container}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        >
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <SafeAreaView style={styles.container}>
                    <View style={styles.content}>
                        <View style={styles.form}>
                            <View style={styles.header}>
                                <Text style={styles.emoji}>
                                    {isFilled ? '😄' : '😃'}
                                </Text>

                                <Text style={styles.title}>
                                    Como podemos
                        {'\n'}
                        chamar você?
                    </Text>
                            </View>


                            <TextInput
                                style={[
                                    styles.input,
                                    (isFocused || isFilled) && { borderColor: colors.green }

                                ]}
                                placeholder="Digite o nome"
                                onBlur={handleInputBlur}
                                onFocus={handleInputFocus}
                                onChangeText={handleInputChange}
                            >

                            </TextInput>
                            <View style={styles.footer}>
                                <Button
                                    title="Confirmar"
                                    onPress={handleSubmit}
                                />
                            </View>

                        </View>



                    </View>
                </SafeAreaView >
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    content: {
        flex: 1,
        width: '100%'
    },
    form: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 54,
        alignItems: 'center'
    },
    header: {
        alignItems: 'center'
    },
    emoji: {
        fontSize: 44
    },
    title: {
        fontSize: 24,
        lineHeight: 32,
        textAlign: 'center',
        color: colors.heading,
        fontFamily: fonts.heading,
        marginTop: 20
    },
    input: {
        borderBottomWidth: 1,
        borderColor: colors.gray,
        color: colors.heading,
        width: '100%',
        fontSize: 18,
        marginTop: 50,
        padding: 10,
        textAlign: 'center'
    },
    footer: {
        marginTop: 40,
        width: '100%',
        paddingHorizontal: 20
    }
})