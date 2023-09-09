import React, {createContext, useContext} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {ItemType} from '../screens/interfaces/item.type';
const NoteContext = createContext<{
  notes: ItemType[];
  setNotes: React.Dispatch<React.SetStateAction<ItemType[]>>;
  getNotes: () => void;
}>({
  notes: [],
  setNotes: () => {},
  getNotes: () => {},
});
const MyNoteProvider = ({children}: {children: React.ReactNode}) => {
  const [notes, setNotes] = React.useState<ItemType[]>([]);
  const getNotes = async () => {
    const result = await AsyncStorage.getItem('notes');
    if (result !== null) {
      setNotes(JSON.parse(result));
    }
  };
  React.useEffect(() => {
    getNotes();
  }, []);
  return (
    <NoteContext.Provider value={{notes, setNotes, getNotes}}>
      {children}
    </NoteContext.Provider>
  );
};
export const useNotesContext = () => useContext(NoteContext);
export default MyNoteProvider;
