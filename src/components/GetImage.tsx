import React from 'react';
import {Image, Text} from 'react-native';

//Lets map each recipeId with an image
//noodles 920x600
//926:60  1.53
//imgs object could store target size and other attributes

//About PATHWAYS
//The image name is resolved the same way JS modules are resolved.
//The bundler will look for my-icon.png in the same folder as the component that requires it.

type GetImageProps = {
  imgName: string | undefined;
};
export const GetImage: React.FC<GetImageProps> = ({imgName}) => {
  if (typeof imgName === 'undefined' || imgName === '???') {
    return <Text>Image Not Found: imgName = {imgName}</Text>;
  } else {
    //const imgPath = '../img/' + imgName;
    //return <Text>Image: {imgPath}</Text>;
    //return <Image source={{uri: imgPath}} />;

    const noodlesPath = './instantNoodles.png';
    return (
      <Image source={require(noodlesPath)} style={{width: 45, height: 26}} />
      //<Image source={{uri: noodlesPath}} style={{width: 90, height: 60}} />
    );
  }
};

/*
<Image
  source={{
    uri: 'https://reactjs.org/logo-og.png',
    cache: 'only-if-cached',
  }}
  style={{width: 400, height: 400}}
/>
*/
