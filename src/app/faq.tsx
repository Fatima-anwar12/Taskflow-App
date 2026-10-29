
import { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Pressable,
} from 'react-native';
import TopNavbar from '../components/TopNavbar';

const questions = [
  {
    question: 'What is TaskFlow?',
    answer:
      'TaskFlow helps you organize daily tasks and manage your routine in one place.',
  },
  {
    question: 'How do I add a task?',
    answer:
      'Go to the Home page, type your task in the input field, and press Add.',
  },
  {
    question: 'What are Categories?',
    answer:
      'Categories help you group tasks, such as Study, Work, Personal, Health, and Shopping.',
  },
  {
    question: 'Can I use TaskFlow every day?',
    answer:
      'Yes! You can use TaskFlow to plan your daily activities and keep track of what you need to do.',
  },
  {
    question: 'Is TaskFlow free?',
    answer:
      'Yes, this student project is designed as a simple task management app.',
  },
];

export default function FAQScreen() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <View style={styles.screen}>
      <TopNavbar />

      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.heading}>Frequently Asked Questions</Text>
        <Text style={styles.subtitle}>
          Find answers to common questions about TaskFlow.
        </Text>

        {questions.map((item, index) => {
          const isOpen = openIndex === index;

          return (
            <View key={item.question} style={styles.card}>
              <Pressable
                onPress={() =>
                  setOpenIndex(isOpen ? null : index)
                }
                style={styles.questionRow}
              >
                <Text style={styles.question}>
                  {item.question}
                </Text>
                <Text style={styles.icon}>
                  {isOpen ? '−' : '+'}
                </Text>
              </Pressable>

              {isOpen && (
                <Text style={styles.answer}>
                  {item.answer}
                </Text>
              )}
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#ede5fc',
  },
  container: {
    paddingHorizontal: 20,
    paddingTop: 125,
    paddingBottom: 40,
    gap: 18,
  },
  heading: {
    fontSize: 32,
    fontWeight: '800',
    color: '#164E63',
    letterSpacing: -0.8,
  },
  subtitle: {
    fontSize: 15,
    lineHeight: 23,
    color: '#64748B',
    marginBottom: 10,
  },
  card: {
    backgroundColor: '#181a63',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#CFFAFE',
    padding: 18,
    elevation: 4,
    shadowColor: '#19857c',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.08,
    shadowRadius: 10,
  },
  questionRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 12,
  },
  question: {
    flex: 1,
    fontSize: 16,
    fontWeight: '700',
    color: '#22aadb',
    lineHeight: 24,
  },
  icon: {
    fontSize: 23,
    fontWeight: '700',
    color: '#0891B2',
    backgroundColor: '#a4c2c5',
    overflow: 'hidden',
    borderRadius: 12,
    paddingHorizontal: 9,
    paddingVertical: 4,
  },
  answer: {
    marginTop: 15,
    paddingTop: 14,
    borderTopWidth: 1,
    borderTopColor: '#708da0',
    fontSize: 14,
    lineHeight: 23,
    color: '#96a3b1',
  },
});