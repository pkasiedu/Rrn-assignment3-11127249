
import { SafeAreaView, ScrollView, StyleSheet, Text, View,Image, TextInput, FlatList } from 'react-native';
const data=[
  {id:0,
    name:'Exercise',
    task:'12 task',
    image:require('./assets/p.png')
  },
  {id:1,
    name:'Study',
    task:'12 task',
    image:require('./assets/s.png')
  },
  {id:2,
    name:'cook',
    task:'12 task',
    image:require('./assets/p.png')
  },
  {id:3,
    name:'travel',
    task:'12 task',
    image:require('./assets/p.png')
  },
  {id:4,
    name:'Exercise',
    task:'12 task',
    image:require('./assets/p.png')
  },
  {id:5,
    name:'Study',
    task:'12 task',
    image:require('./assets/s.png')
  },
  {id:6,
    name:'Study',
    task:'12 task',
    image:require('./assets/s.png')
  },
  {id:7,
    name:'Study',
    task:'12 task',
    image:require('./assets/s.png')
  },
];
const stat=[
  {id:0,
    name:'Mobile Application development',
   
  },
  {id:1,
    name:'web development',
   
  },
  {id:2,
    name:'Php',
   
  },
  {id:3,
    name:'c++',
   
  },
  {id:4,
    name:'statistics',
   
  },
  {id:5,
    name:'GOlab',
   
  },
  {id:6,
    name:'Excel',
   
  },
  {id:7,
    name:'Shutem3',
   
  },
  {id:8,
    name:'Amdan',
   
  },
  {id:9,
    name:'Java',
   
  }, {id:10,
    name:'MangoDB',
   
  },
  {id:11,
    name:'functionalADD',
   
  },
  {id:12,
    name:'Exercise',
   
  },
  {id:13,
    name:'Sudy',
   
  },



];

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
    <View style={styles.container1}>
      
    <View>
    <Text style={styles.edittext}>Hello , Devs</Text>
    <Text style={{fontWeight:'bold'}}>14 Tasks Today</Text>
    </View>
    <View>
    <Image source={require('./assets/person.png')}/>
    </View>
    </View>

    <View style={styles.container1}>
    <View style={styles.search}>
    
    <Image source={require('./assets/Vector.png')}/>
    <TextInput style={styles.TextInput1}   placeholder='search'/>
    </View>
    <View>
    <Image source={require('./assets/Filter.png')}
    />
    </View>
    </View>
    <View style={styles.container1}>
      <Text style={styles.edittext1} >
        Categories
      </Text>
    </View>
    <View>

      <View>
        <FlatList
        data={data}
        keyExtractor={item=>item.id.toString()}
        renderItem={({item})=>(
       <View style={{backgroundColor:'white',padding:15, borderRadius:10}}>
        <View>
        <Text>{item.name}</Text>
        <Text>{item.task}</Text>
        </View>
        <View>
        <Image
        source={item.image}/>
        </View>
       </View>
      






        )}
        horizontal
        contentContainerStyle={{columnGap:13}}/>
      </View>
    </View>
    <View>

<View>
  <FlatList
  data={stat}
  keyExtractor={item=>item.id.toString()}
  renderItem={({item})=>(
 <View style={{backgroundColor:'white',padding:55, borderRadius:10}}>
  <View>
  <Text style={{fontWeight:'bold'}}>{item.name}</Text>
  
    
  </View>
 
 
 </View>







  )}
 
  
  contentContainerStyle={{rowGap:13}}/>
</View>
</View>
   
    
    </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F0E8',   
    flexDirection:'row',
    padding:14
  },
  container1: {
    display:'flex',
    flex: 1,
    backgroundColor: '#F7F0E8',   
    justifyContent: 'space-between',
    flexDirection:'row',
    padding:14,
  },
  edittext:{
fontSize:24,
fontWeight:'bold'


  },
  edittext1:{
    fontSize:15,
    fontWeight:'bold'
    
    
      },
  TextInput1:{
    
    marginLeft:12

  },
  search:{

  display:'flex',
  flexDirection:'row',
  alignItems:'center',
  backgroundColor:'white',
  borderColor:'#F7F0E8',
  borderRadius:10,
  flex:1,
  

  }
});
