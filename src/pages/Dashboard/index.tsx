import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { TabBar } from '../../components/TabBar';
import axios from 'axios';
import {
  Container,
  Search,
  Header,
  HeaderContent,
  UserName,
  AutoMessage,
  TextHeaderBox,
  Title,
  SearchIcon,
  SearchContent,
  SearchText,
  Profile,
  UserIcon,
  Logout,
  LogoutTitle,
  ShortCut,
  ShortCutHospital,
  NearbyHospitals,
  AllHospitals,
  ShortCutDoctor,
  Specialty,
  AllDoctors,
  ShortCutTitle,
  PatternText,


} from './style';
import { Logo } from '../../components/Logo';
import { useAuth } from '../../hooks/auth';



export function Dashboard() {

  const { signOut } : any = useAuth();
  const navigation = useNavigation();

  const [grettings, setGrettings] = useState('');

  useEffect(() => {

    const CurrentHour = new Date().getHours();

    if (CurrentHour >= 6 && CurrentHour < 12) {
      setGrettings('Bom Dia');
    }
    else if (CurrentHour >= 12 && CurrentHour < 18) {
      setGrettings('Boa Tarde');
    }

    else {
      setGrettings('Boa Noite')
    }


  }, [])


  return (
    <>
      <Header>
      

      <Logout onPress={signOut}>
        <LogoutTitle>Sair</LogoutTitle>
      </Logout>

      </Header>

      <Container>

        <HeaderContent>
          <Logo height={50} width={50} />
          <Title>BuscaSus</Title>
        </HeaderContent>

       
        <SearchContent>
          <Search onPress={() => navigation.navigate('SearchOptions')} >
           <SearchIcon name="search" />
          
            <SearchText>Pesquisar</SearchText>
          </Search>
        </SearchContent>



        <ShortCutTitle>Pesquisar por:</ShortCutTitle>

        <ShortCut>

          <ShortCutHospital>

            <NearbyHospitals>
              <PatternText>Hospitais Próximos</PatternText>
              
            </NearbyHospitals>

            <AllHospitals onPress={() => navigation.navigate('AllHospitals')} >
            <PatternText>Hospitais</PatternText>
            </AllHospitals>

          </ShortCutHospital>



          <ShortCutDoctor>

            <Specialty onPress={() => navigation.navigate('Specialtys')}>
            <PatternText>Especialidades</PatternText>
            </Specialty>

            <AllDoctors onPress={() => navigation.navigate('AllDoctors')}>
            <PatternText>Médicos</PatternText>
            </AllDoctors>

          </ShortCutDoctor>

        </ShortCut>

        
      </Container>

   
     <TabBar/>
     
    </>
  );
}



