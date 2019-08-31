import React, {useState} from 'react';
import {Picker} from 'react-native';
import {programmingLanguages} from '../../api/constants';

export const Selection = props => {
  const [selection, setSelection] = useState('');

  console.log('selection', selection);

  return (
    <Picker
      selectedValue={selection}
      onValueChange={item => setSelection(item)}>
      {programmingLanguages.map((language, idx) => (
        <Picker.Item key={idx} label={language} value={language} />
      ))}
    </Picker>
  );
};

export default Selection;
