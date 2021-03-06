import React , {Component} from 'react';
import {Router,Stack,Scene,Actions} from 'react-native-router-flux';
import {
    View,
    StyleSheet,
    Text,
    ScrollView,
    Image,
    TouchableHighlight,
    TouchableOpacity,
}from 'react-native';


export default class List extends Component{
    render(){
        return(
            <ScrollView contentContainerStyle={styles.contentContainer}>
                
                
                <View style={{flex:9}}>
                    
                    <View style={{flex:1,flexDirection:'row'}}>
                        
                        <TouchableHighlight  style={styles.button}  onPress={ () =>{ Actions.listItem() } } >
                        
                        
                        <Image style={{width:200,height:200}}  source={require('../../assets/keelung.jpg')}>
                            <Text style={styles.placeText}>基隆</Text>
                        </Image>
                        
                        
                        </TouchableHighlight>
                        
                        <View style={{borderWidth:0.5,borderColor:'#fff'}}></View>
                        
                        <TouchableHighlight  style={styles.button}  onPress={ () =>{ Actions.listItem2() } } >
                        
                        <Image style={{width:200,height:200}}  source={require('../../assets/taoyuan.jpg')}>
                            <Text style={styles.placeText}>桃園</Text>
                        </Image>
                    
                        </TouchableHighlight>
                    
                    </View>
                    
                    
                    <View style={{borderWidth:0.5,borderColor:'#fff'}}></View>
                    
                    
                    <View style={{flex:1,flexDirection:'row'}}>
                    
                    <TouchableHighlight  style={styles.button}  onPress={ () =>{ Actions.listItem3() } } >
                    
                        <Image style={{width:200,height:200}}  source={require('../../assets/hsinchu.jpg')}>
                            <Text style={styles.placeText}>新竹</Text>
                        </Image>
                        
                     </TouchableHighlight>      
                    
                        <View style={{borderWidth:0.5,borderColor:'#fff'}}></View>
                        
                    <TouchableHighlight  style={styles.button}  onPress={ () =>{ Actions.listItem4() } } >        
                        
                       <Image style={{width:200,height:200}}  source={require('../../assets/miaoli.jpg')}>
                            <Text style={styles.placeText}>苗栗</Text>
                        </Image>
                        
                    </TouchableHighlight>  
                        
                    </View>
                    
                    
                    <View style={{borderWidth:0.5,borderColor:'#fff'}}></View>
                    
                    
                    <View style={{flex:1,flexDirection:'row'}}>
                    
                    <TouchableHighlight  style={styles.button}  onPress={ () =>{ Actions.listItem5() } } >
                    
                        <Image style={{width:200,height:200}}  source={require('../../assets/nantou.jpg')}>
                            <Text style={styles.placeText}>南投</Text>
                        </Image>
                        
                    </TouchableHighlight>    
                        
                        <View style={{borderWidth:0.5,borderColor:'#fff'}}></View>
                        
                    <TouchableHighlight  style={styles.button}  onPress={ () =>{ Actions.listItem6() } } >
                        
                        <Image style={{width:200,height:200}}  source={require('../../assets/taichung.jpg')}>
                            <Text style={styles.placeText}>台中</Text>
                        </Image>
                        
                    </TouchableHighlight>       
                        
                    </View>
                
                </View>
                
            </ScrollView>
           
        );
        
        
        
    }
};

const styles=StyleSheet.create({
    contentContainer:{
        flex:1,
    },
    
    headerText:{
      fontSize:20,
      color:'black'
    },
    
    placeText:{
        padding:15,
        fontSize:20,
        color:'black',
    },
    button:{
        flex:1,
    },
    
});