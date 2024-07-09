/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect, useState} from 'react';
import {
  Button,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  useColorScheme,
} from 'react-native';
import {QoreIdSdk} from '@qore-id/react-native-qoreid-sdk';

import {Colors} from 'react-native/Libraries/NewAppScreen';

function App(): JSX.Element {
  const [clientId, setClientId] = useState('72K3NYMTIZS4WNFSCMSR');
  const [isWorkflow, setIsWorkflow] = useState(false);
  const [selectedProductId, setSelectedProductId] = useState('bvn_boolean');
  const [firstName, setFirstName] = useState('John');
  const [lastName, setLastName] = useState('Duke');
  const [phoneNumber, setPhoneNumber] = useState('07069449762');
  const [email, setEmail] = useState('');
  const [dob, setDob] = useState('');
  const [gender, setGender] = useState('');
  const [idType, setIdCardType] = useState('bvn');
  const [idNumber, setIdNumber] = useState('28689965495');
  const [address, setAddress] = useState('12 Ogunshakin str');
  const [state, setState] = useState('Lagos');
  const [city, setCity] = useState('Ikeja');
  const [lga, setLga] = useState('Ikeja');
  const [region, setRegion] = useState('');
  const [town, setTown] = useState('');
  const [district, setDistrict] = useState('');
  const [virAddress, setVirAddress] = useState('');
  const [middleName, setMiddleName] = useState('');
  const [flowId, setFlowId] = useState('0');
  const [customerRef, setCustomerRef] = useState('ref-3949404');
  const [OCRList, setOCRList] = useState('PASSPORT_NGA');

  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const onLog = (data: any) => {
    console.debug(data);
  };

  useEffect(() => {
    QoreIdSdk.events(onLog);
  }, []);

  const submit = async () => {
    QoreIdSdk.launch({
      clientId,
      flowId: 0,
      applicantData: {firstName, lastName, phoneNumber},
      productCode: selectedProductId,
      customerReference: customerRef,
      ocrAcceptedDocuments: [
        'DRIVERS_LICENSE_NGA',
        'VOTERS_CARD_NGA',
        'NIN_SLIP_NGA',
        'PASSPORT_NGA',
      ],
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />

      <Button onPress={submit} title="QoreId Button" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
