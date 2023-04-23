import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';


const Donate = () => {
return (
  <View className="mt-10">
    <Text>Donate</Text>
  </View>
)
}

export default Donate;
// const GooglePlacesInput = () => {
//   return (
//     <GooglePlacesAutocomplete
//       placeholder='Search'
//       onPress={(data, details = null) => {
//         // 'details' is provided when fetchDetails = true
//         console.log(data, details);
//       }}
//       query={{
//         key: 'AIzaSyD_tGSKiffYVPkLIN4fhyXUB8HtwW4czE0',
//         language: 'en',
//       }}
//     />
//   );
// };

// export default GooglePlacesInput;