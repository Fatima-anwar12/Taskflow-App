
import { useState } from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  Pressable,
  ScrollView,
  StyleSheet,
  useColorScheme,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import TopNavbar from '../components/TopNavbar';
import { colors } from '../constants/colors';
import DatePickerExample from './home';
import TaskCard from '../components/TaskCard';
import { Link } from 'expo-router';

export default function HomeScreen() {
  const [task, setTask] = useState('');
  const colorScheme = useColorScheme();
  const theme = colorScheme === 'dark' ? colors.dark : colors.light;

  const styles = createStyles(theme);

  function addTask() {
    if (task.trim() === '') {
      return;
    }

    alert(`Task added: ${task}`);
    setTask('');
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <TopNavbar />
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.container}
        showsVerticalScrollIndicator={true}
        keyboardShouldPersistTaps="handled"
      >
        <Image
          source={require('../../assets/images/taskflow.png')}
          style={styles.logo}
          resizeMode="contain"
        />

        <Text style={styles.title}>TaskFlow</Text>

        <Text style={styles.greeting}>Welcome Back!</Text>
        

        <View style={styles.inputRow}>
          <TextInput
            style={styles.input}
            placeholder="Add a new task"
            placeholderTextColor={theme.secondaryText}
            value={task}
            onChangeText={setTask}
            onSubmitEditing={addTask}
            returnKeyType="done"
          />

          <Pressable
            style={styles.button}
            onPress={addTask}
          >
            <Text style={styles.buttonText}>Add</Text>
          </Pressable>
        </View>
        <DatePickerExample />
        <Text style={styles.sectionTitle}>My Tasks</Text>

        <View style={styles.taskList}>
  <TaskCard
    title="Complete Assignment"
    description="Finish my React Native assignment."
  />

  <TaskCard
    title="Learn JavaScript"
    description="Practice functions and arrays."
  />

  <TaskCard
    title="Build TaskFlow App"
    description="Improve my task management app."
  />
</View>
          
        
      </ScrollView>
    </SafeAreaView>
  );
}

function createStyles(theme: typeof colors.light) {
  return StyleSheet.create({
    safeArea: {
      flex: 1,
      backgroundColor: theme.background
       
    },
    scrollView: {
      flex: 1,
    },
    container: {
      width: '100%',
      maxWidth: 600,
      alignSelf: 'center',
      padding: 20,
      paddingBottom: 40,
      paddingTop: 100,
      gap: 16,
    },
    logo: {
      width: 120,
      height: 120,
      alignSelf: 'center',
    },
    title: {
      fontSize: 30,
      fontWeight: 'bold',
      color: theme.text,
      textAlign: 'center',
    },
    greeting: {
      fontSize: 18,
      color: theme.secondaryText,
      textAlign: 'center',
    },
    inputRow: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 10,
      width: '100%',
    },
    input: {
      flex: 1,
      minWidth: 0,
      borderWidth: 1,
      borderColor: theme.border,
      borderRadius: 12,
      paddingHorizontal: 14,
      paddingVertical: 13,
      backgroundColor: theme.input,
      color: theme.text,
      fontSize: 16,
    },
    button: {
      backgroundColor: theme.primary,
      paddingHorizontal: 20,
      paddingVertical: 14,
      borderRadius: 12,
      alignItems: 'center',
      justifyContent: 'center',
    },
    buttonText: {
      color: theme.buttonText,
      fontWeight: 'bold',
      fontSize: 15,
    },
    sectionTitle: {
      fontSize: 22,
      fontWeight: 'bold',
      color: theme.text,
      marginTop: 8,
    },
    taskList: {
      width: '100%',
      gap: 14,
    },
    taskCard: {
      backgroundColor: theme.card,
      padding: 18,
      borderRadius: 14,
      borderWidth: 1,
      borderColor: theme.border,
      borderLeftWidth: 4,
      borderLeftColor: theme.primary,
      gap: 6,
      shadowColor: theme.shadow,
      shadowOffset: { width: 0, height: 3 },
      shadowOpacity: 0.08,
      shadowRadius: 8,
      elevation: 3,
    },
    taskTitle: {
      fontSize: 17,
      fontWeight: 'bold',
      color: theme.text,
    },
    taskDescription: {
      fontSize: 14,
      lineHeight: 21,
      color: theme.secondaryText,
    },
  });
}
