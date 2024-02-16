import { ImageBackground, StyleSheet, Text, View, Image } from 'react-native';

function WelcomeScreen(): JSX.Element {
    return (
        <ImageBackground 
            source={
                require("../assets/bg_image.png")
            }
            style={style.background}
        >
            {/* the upper part */}
            <View style={{width: '100%', backgroundColor: 'blue', alignItems: 'center', paddingTop: 10}}>
                <Image 
                    source={{ uri: "https://foodish-api.com/images/dosa/dosa13.jpg" }} 
                    width={100} 
                    height={100} 
                    resizeMode='cover'
                />
                <View>
                    <Text>Making chickens happy</Text>
                </View>
            </View>

            {/* for auth */}
            <View style={{width: '100%'}}>
                <View style={style.loginButton}>
                    <Text>Login</Text>
                </View>
                <View style={style.signupButton}>
                    <Text>Signup</Text>
                </View>
            </View>
        </ImageBackground>
    );
}

const style = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        height: '100%'
    },
    loginButton: {
        width: '100%',
        height: 70,
        backgroundColor: 'yellow',
    },

    signupButton: {
        width: '100%',
        height: 70,
        backgroundColor: 'yellow'
    }
})

export default WelcomeScreen;