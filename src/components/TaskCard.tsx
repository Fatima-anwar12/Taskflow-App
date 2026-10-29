
import { View, Text, StyleSheet, useColorScheme } from 'react-native';
import { colors } from '../constants/colors';

type TaskCardProps = {
  title: string;
  description: string;
};

export default function TaskCard({ title, description }: TaskCardProps) {
  const isDark = useColorScheme() === 'dark';
  const theme = isDark ? colors.dark : colors.light;

  return (
    <View
      style={[
        styles.card,
        {
          backgroundColor: theme.card,
          borderColor: theme.border,
          borderLeftColor: theme.primary,
          shadowColor: theme.shadow,
        },
      ]}
    >
      <View style={styles.headingRow}>
        <View style={[styles.dot, { backgroundColor: theme.primary }]} />
        <Text style={[styles.title, { color: theme.text }]}>{title}</Text>
      </View>

      <Text style={[styles.description, { color: theme.secondaryText }]}>
        {description}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 18,
    borderRadius: 18,
    borderWidth: 1,
    borderLeftWidth: 4,
    gap: 10,
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.07,
    shadowRadius: 12,
    elevation: 3,
  },
  headingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  dot: {
    width: 9,
    height: 9,
    borderRadius: 5,
  },
  title: {
    flex: 1,
    fontSize: 16,
    fontWeight: '700',
    letterSpacing: 0.1,
  },
  description: {
    fontSize: 14,
    lineHeight: 22,
    paddingLeft: 19,
  },
});
