import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        margin:20,
        gap:15

    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent:'space-between',
      },
      profileInfo:{
        flexDirection: 'row',
        alignItems:'center',
        justifyContent:'flex-start'
      },
      profileName: {
        fontWeight: 'bold',
        fontSize: 16,
        color:'#000000'
      },
      image: {
        width: '100%',
        borderRadius: 10,
      },

      actions_header:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent:'flex-start',
        gap:20,

      },
      actions:{
        flexDirection: 'row',
        alignItems: 'center',
        gap:10
      }


  });

  export default styles;