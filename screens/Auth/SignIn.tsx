import {View, Text, Pressable} from 'react-native';
import React, {useState} from 'react';
import {supabase} from '../../supabaseClient';
import {useTheme} from '@react-navigation/native';

type Props = {};

const SignIn = (props: Props) => {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    const {data, error} = await supabase.auth.signInWithPassword({
      email: 'lucasthirion@live.fr',
      password: '------',
    });
    console.log('data,error', data, error);
  };
  const {colors} = useTheme();
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Pressable
        onPress={() => handleLogin()}
        style={{
          borderRadius: 10,
          backgroundColor: colors.lightGreen,
          padding: 20,
        }}>
        <Text>SignIn</Text>
      </Pressable>
    </View>
  );
};

export default SignIn;
