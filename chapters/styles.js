import { StyleSheet } from "react-native";

const styles = ({

    container: {
        flex: 1,
        paddingTop: 20,
        justifyContent: 'center',
        marginHorizontal: "auto"
    },
    backgroundImage: {
        resizeMode: 'cover',
        height: '100%',
        width: '100%',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: 0
    },
    navImages: {
        height: 80,
        width: 80,
        backgroudColor: 'rgba(255,255,255,0)'
    },
    titleImages: {
        height: 80,
        width: '50%',
        backgroundColor: 'rgba(255,255,255,0)'
    },
    paragraph: {
        fontSize: 16,
        marginVertical: 2,
    },
    boldCenter: {
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 0,
        marginBottom: 2,
        textAlign: 'center'
    },
    listen: {
        flexDirection: 'row',
    padding: 15  
    },
    playOptions:{
        width:24,
        height:24
    },
    content: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        alignContent: 'center',
    },
    row: {
        flexDirection: 'row',
        width: '80%'
    },
    image: {
        resizeMethod: 'auto',
        resizeMode: 'contain',
        height: 250,
        width: '100%'
    },
    left: {
        width: '30%'
    },
    center: {
        width: '60%'
    },
    right: {
        width: '10%'
    },
});

export default StyleSheet;