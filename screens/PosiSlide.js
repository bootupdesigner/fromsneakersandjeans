import { StyleSheet, Text, View, Modal, Image, Pressable } from 'react-native'
import { React, useState} from 'react'

const PosiSlide = (props) => {

    const [modalVisible, setModalVisible] = useState(false);
    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
        >
            <View>
                <Image style={styles.navImages} source={props.posi} accessibilityLabel='visit next chapter' />
                <Pressable
                    style={[styles.button, styles.buttonClose]}
                    onPress={() => setModalVisible(!modalVisible)}
                >
                    <Text style={styles.textStyle}>Hide Modal</Text>
                </Pressable>
            </View>
        </Modal>
    )
};

const styles = StyleSheet.create({});

export default PosiSlide;