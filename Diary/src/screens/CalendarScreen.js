import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Calendar } from 'react-native-calendars';

const CalendarScreen = ({ navigation }) => {
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);
  const [quote, setQuote] = useState('');

  // Fetch a random quote
  const getRandomQuote = async () => {
    try {
      const response = await fetch('https://zenquotes.io/api/random');
      const data = await response.json();
      setQuote(data[0].q);
    } catch (error) {
      console.error('Error fetching quote:', error);
      setQuote('Stay positive and keep moving forward!');
    }
  };

  // Get a new quote when you select a date
  useEffect(() => {
    getRandomQuote();
  }, [selectedDate]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Calendar</Text>
      <Calendar
        current={selectedDate}
        markedDates={{
          [selectedDate]: { selected: true, marked: true, selectedColor: 'pink' },
        }}
        onDayPress={(day) => {
          setSelectedDate(day.dateString);
          navigation.navigate('ViewPostsByDate', { date: day.dateString });
        }}
      />
      <View style={styles.quoteContainer}>
        <Text style={styles.quoteTitle}>Today's Quote is:</Text>
        <Text style={styles.quote}>{quote}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#FFD9E8',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#333',
    marginBottom: 10,
  },
  quoteContainer: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#FFE4E8',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#F5A7B8',
  },
  quoteTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#C77489',
    textAlign: 'center',
    marginBottom: 5,
  },
  quote: {
    fontSize: 16,
    fontStyle: 'italic',
    color: '#C77489',
    textAlign: 'center',
  },
});

export default CalendarScreen;
