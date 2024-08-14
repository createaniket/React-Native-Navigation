import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { ParamListBase, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

const ManagedService = () => {
    const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

    const SendToRegisterComplaint = () => {
        console.log('I am being hit for Registering a complaint');
        // Navigate to RegisterComplaint screen
        navigation.navigate('RegisterComplaint');
    }

    return (
        <ScrollView>
            <View>
                <Text style={styles.ManagedServiceTitle}>Managed Service</Text>
            </View>

            <View style={styles.cardContiner}>
                <TouchableOpacity style={[styles.card, styles.sepcificCardPink]} onPress={SendToRegisterComplaint}>
                    <Text style={styles.cardTitle}>Raise a ticket</Text>
                    <Text style={styles.cardDescription}>
                        Click here to register a new complaint
                    </Text>
                </TouchableOpacity>

                <View style={[styles.card, styles.sepcificCardBlue]}>
                    <Text style={styles.cardTitle}>Go to all tickets</Text>
                    <Text style={styles.cardDescription}>
                        Click here to view all tickets
                    </Text>
                </View>

                <View style={[styles.card, styles.sepcificCardGreen]}>
                    <Text style={styles.cardTitle}>Closed tickets</Text>
                    <Text style={styles.cardDescription}>
                        Click here to view all the closed complaints
                    </Text>
                </View>

                <View style={[styles.card, styles.sepcificCardNormal]}>
                    <Text style={styles.cardTitle}>Other fields for tickets</Text>
                    <Text style={styles.cardDescription}>
                        Some actions for tickets will be added here
                    </Text>
                </View>
            </View>
        </ScrollView>
    );
};

export default ManagedService;

const styles = StyleSheet.create({
    ManagedServiceTitle: {
        fontWeight: 'bold',
        color: '#000',
        fontSize: 28,
        textAlign: 'center',
        marginVertical: 10,
    },
    cardContiner: {},
    card: {
        width: 400,
        height: 190,
        padding: 20,
        alignSelf: 'center',
        borderRadius: 5,
        marginVertical: 5,
    },
    cardTitle: {
        fontWeight: 'bold',
        color: '#000',
        fontSize: 28,
    },
    cardDescription: {
        color: '#000',
        fontSize: 14,
        marginVertical: 30,
    },
    sepcificCardPink: {
        backgroundColor: '#e91d63',
    },
    sepcificCardBlue: {
        backgroundColor: '#1c7de2',
    },
    sepcificCardGreen: {
        backgroundColor: '#4baf51',
    },
    sepcificCardNormal: {
        backgroundColor: '#cfcdcc',
    },
});
