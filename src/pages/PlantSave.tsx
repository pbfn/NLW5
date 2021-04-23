import React from 'react'

import {
    StyleSheet,
    Text,
    View,
    Alert,
    Image
} from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { SvgFromUri } from 'react-native-svg'

import waterdrop from '../assets/waterdrop.png'
import { Button } from '../components/Button'
import colors from '../styles/colors'
import fonts from '../styles/fonts'



export function PlantSave() {
    return (
        <View style={styles.container}>
            <ScrollView style={styles.plantInfo}>
                <SvgFromUri
                    uri=""
                    height={150}
                    width={150}
                />
                <Text style={styles.plantName}>
                    Nome da Planta
            </Text>
                <Text style={styles.plantAbout}>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse, quisquam quibusdam, id debitis neque soluta quidem maxime, distinctio voluptatum cumque natus et. Minus voluptate accusamus, ratione laudantium dolor ipsa voluptas!
            </Text>
            </ScrollView>

            <View style={styles.controllers}>
                <View style={styles.tipContainer}>
                    <Image
                        source={waterdrop}
                        style={styles.tipImage}
                    />
                    <Text style={styles.tipText}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elisad
                    </Text>
                </View>

                <Text style={styles.alertLabel}>
                    Escolha o melhor horário para ser lembrado
                </Text>

                <Button
                    title="Cadastrar planta"
                    onPress={() => { }}
                />
            </View>
        </View>
    )
}




const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: colors.shape
    },
    plantInfo: {

    },
    plantName: {

    },
    plantAbout: {

    },
    controllers: {

    },
    tipContainer: {

    },
    tipImage: {

    },
    tipText: {

    },
    alertLabel: {

    }
})