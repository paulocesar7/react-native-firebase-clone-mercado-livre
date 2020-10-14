import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    botao_primary: { 
        width: '100%',
        backgroundColor: '#3483FA',
        borderRadius: 3,
        height: 60,
        justifyContent: "center",
        alignItems: 'center',
        marginTop: 10,
    },
    botao_outline_primary: { 
        width: '100%',
        backgroundColor: '#FFF',
        borderRadius: 3,
        borderColor: '#3483FA',
        borderWidth: 2,
        height: 60,
        justifyContent: "center",
        alignItems: 'center',
        marginTop: 10,
        },
    input_search: {
        backgroundColor: "#fff",
        borderRadius: 25,
        width: "100%",
        height: 40,
        paddingHorizontal: 5,
        //paddingVertical: 0,
        flexDirection: "row",
        justifyContent: "flex-start",
    },

    drawer_content_items:{
        flexDirection: 'row',
        alignItems:'center',
        paddingTop:10,
        paddingBottom:10
    },
    drawer_content_icon:{
        marginRight: 10, 
        marginLeft: 20
    },
    mercado_pago: {
        backgroundColor: "#FFF589",
        borderRadius: 20,
        paddingHorizontal: 25,
        paddingVertical: 5,
        width: "100%",
        height: 30,
        marginTop: 20,
        marginBottom: 20,
        flexDirection: "row",
    },
    mercado_pago_text: {
        marginLeft: 20,
    },
});

export default styles