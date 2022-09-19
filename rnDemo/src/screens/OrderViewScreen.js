import React, {useState} from 'react';
import {SectionList, StyleSheet, Text} from 'react-native';
import {storage} from '../utils/storage';
import {getOrderInfo} from '../service/orderService';

const sections = [];

export default function OrderViewScreen() {
    const [dataSource, setDataSource] = useState(sections);
    const [userId, setUserId] = useState(0);

    const getOrders = data => {
        storage.load('userId', userId => {
            setUserId(userId);
            setDataSource(data.data);
        });
    };

    React.useEffect(() => {
        storage.load('userId', userId => {
            const UserId = {userId: userId};
            getOrderInfo(UserId, getOrders);
        });
        // console.log(1);
    });

    return (
        <SectionList
            style={styles.container}
            sections={dataSource}
            renderItem={({item}) => (
                <Text style={styles.row}>
                    {item.groupTitle}
                    {'\n'}
                    {item.orderPrice}
                </Text>
            )}
            renderSectionHeader={({section}) => (
                <Text style={styles.header}>{section.title}</Text>
            )}
            keyExtractor={item => item.id}
        />
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    row: {
        padding: 15,
        marginBottom: 5,
        backgroundColor: 'skyblue',
    },
    header: {
        padding: 15,
        marginBottom: 5,
        backgroundColor: 'steelblue',
        color: 'white',
        fontWeight: 'bold',
    },
});
