import { StyleSheet, Text, View, StatusBar, ScrollView, SafeAreaView, FlatList, Image } from 'react-native'
import React, {useState} from 'react'
import { Constants } from 'expo-constants';


const numColumns = 2;

export default function Home () {
    const inisialdata = [
        {
            id :1,
            imageUri: 'https://selerasa.com/wp-content/uploads/2015/12/images_daging_ayam-goreng.jpg',
        },
        {
            id :2, 
            imageUri: 'https://cdn-2.tstatic.net/tribunnews/foto/bank/images/tips-pasti-jadi-bikin-rendang-pakai-rice-cooker.jpg',
        },
        {
            id :3,
            imageUri: 'https://selerasa.com/wp-content/uploads/2015/12/images_daging_ayam-goreng.jpg',
        },
        {
            id :4, 
            imageUri: 'https://cdn-2.tstatic.net/tribunnews/foto/bank/images/tips-pasti-jadi-bikin-rendang-pakai-rice-cooker.jpg',
        },
        {
            id :5,
            imageUri: 'https://selerasa.com/wp-content/uploads/2015/12/images_daging_ayam-goreng.jpg',
        },
        {
            id :6, 
            imageUri: 'https://cdn-2.tstatic.net/tribunnews/foto/bank/images/tips-pasti-jadi-bikin-rendang-pakai-rice-cooker.jpg',
        },
    ];

    const [foto, setFoto] = useState(inisialdata);

    const renderItem  = ({item}) => {
        return (
            <View style={styles.renderitem}>
                <Image source={{ uri: item.imageUri}} style={styles.image}/>
            </View>
        )
    }

  return (
    <View style={styles.container}>
        <View >
            <FlatList
            numColumns={2}
            showsHorizontalScrollIndicator={false}
            data={foto}
            keyExtractor={(item)=>item.id}
            renderItem={renderItem}
            />
        </View>
        
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
        flex: 1,
        marginHorizontal: 5,
        paddingTop: 11,
        backgroundColor:'#fdfdfd'
  },
    body: {
        height: 150,
    },
    image: {
        flex: 1,
        height: 180,
        resizeMode: 'cover',
        borderRadius: 8,
    },

    renderitem: {
        flex: 1,
        height: 190,
        justifyContent: 'center',
        marginTop: 10,
        marginHorizontal: 5,
        
    }
})