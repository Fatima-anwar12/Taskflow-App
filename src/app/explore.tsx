
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Pressable,
  useColorScheme,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useState } from 'react';
import TopNavbar from '../components/TopNavbar';
import { colors } from '../constants/colors';

const categories = [
  { id: '1', icon: '💻', title: 'Work', subtitle: 'Career & projects', count: '04 tasks' },
  { id: '2', icon: '📚', title: 'Study', subtitle: 'Learning & revision', count: '06 tasks' },
  { id: '3', icon: '🏃', title: 'Health', subtitle: 'Fitness & wellbeing', count: '03 tasks' },
  { id: '4', icon: '🏠', title: 'Personal', subtitle: 'Everyday activities', count: '05 tasks' },
  { id: '5', icon: '🛒', title: 'Shopping', subtitle: 'Things to pick up', count: '02 tasks' },
  { id: '6', icon: '✨', title: 'Other', subtitle: 'Everything else', count: '01 task' },
];

export default function ExploreScreen() {
  const isDark = useColorScheme() === 'dark';
  const theme = isDark ? colors.dark : colors.light;
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <SafeAreaView
      style={[styles.safeArea, { backgroundColor: theme.background }]}
    >
      <TopNavbar />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.container}
      >
        <View style={styles.header}>
          <Text style={[styles.eyebrow, { color: theme.primary }]}>
            STAY ORGANIZED
          </Text>
          <Text style={[styles.heading, { color: theme.text }]}>
            Categories
          </Text>
          <Text style={[styles.subtitle, { color: theme.secondaryText }]}>
            Everything has its place. Find your flow.
          </Text>
        </View>

        <View style={styles.summaryRow}>
          <View
            style={[
              styles.summaryCard,
              { backgroundColor: theme.primary },
            ]}
          >
            <Text style={styles.summaryNumber}>06</Text>
            <Text style={styles.summaryLabel}>Categories</Text>
          </View>

          <View
            style={[
              styles.summaryCard,
              styles.summarySecondary,
              { backgroundColor: theme.softPrimary, borderColor: theme.border },
            ]}
          >
            <Text style={[styles.summaryNumberSecondary, { color: theme.text }]}>
              21
            </Text>
            <Text style={[styles.summaryLabelSecondary, { color: theme.secondaryText }]}>
              Total tasks
            </Text>
          </View>
        </View>

        <View style={styles.sectionHeader}>
          <Text style={[styles.sectionTitle, { color: theme.text }]}>
            Explore your spaces
          </Text>
          <Text style={[styles.sectionHint, { color: theme.secondaryText }]}>
            {selected ? '1 selected' : 'Tap a category'}
          </Text>
        </View>

        <View style={styles.grid}>
          {categories.map((category) => {
            const isSelected = selected === category.id;

            return (
              <Pressable
                key={category.id}
                onPress={() =>
                  setSelected(isSelected ? null : category.id)
                }
                style={[
                  styles.categoryCard,
                  {
                    backgroundColor: theme.card,
                    borderColor: isSelected ? theme.primary : theme.border,
                    borderWidth: isSelected ? 2 : 1,
                  },
                ]}
              >
                <View style={styles.cardTop}>
                  <View
                    style={[
                      styles.categoryIcon,
                      { backgroundColor: theme.softPrimary },
                    ]}
                  >
                    <Text style={styles.emoji}>{category.icon}</Text>
                  </View>

                  <View
                    style={[
                      styles.arrowCircle,
                      {
                        backgroundColor: isSelected
                          ? theme.primary
                          : theme.softPrimary,
                      },
                    ]}
                  >
                    <Text
                      style={[
                        styles.arrow,
                        { color: isSelected ? '#FFFFFF' : theme.primary },
                      ]}
                    >
                      {isSelected ? '✓' : '↗'}
                    </Text>
                  </View>
                </View>

                <Text style={[styles.categoryTitle, { color: theme.text }]}>
                  {category.title}
                </Text>

                <Text
                  style={[
                    styles.categorySubtitle,
                    { color: theme.secondaryText },
                  ]}
                >
                  {category.subtitle}
                </Text>

                <View
                  style={[
                    styles.cardDivider,
                    { backgroundColor: theme.border },
                  ]}
                />

                <Text style={[styles.taskCount, { color: theme.primary }]}>
                  {category.count}
                </Text>
              </Pressable>
            );
          })}
        </View>

        {selected && (
          <View
            style={[
              styles.selectedBanner,
              { backgroundColor: theme.softPrimary, borderColor: theme.border },
            ]}
          >
            <Text style={[styles.selectedText, { color: theme.text }]}>
              {categories.find((item) => item.id === selected)?.title} selected
            </Text>
            <Text style={[styles.selectedHint, { color: theme.secondaryText }]}>
              Category selection is ready for your next feature.
            </Text>
          </View>
        )}

        <View
          style={[
            styles.footer,
            { backgroundColor: theme.card, borderColor: theme.border },
          ]}
        >
          <Text style={styles.footerIcon}>✦</Text>
          <View style={styles.footerContent}>
            <Text style={[styles.footerTitle, { color: theme.text }]}>
              One thing at a time
            </Text>
            <Text style={[styles.footerDescription, { color: theme.secondaryText }]}>
              Break your day into smaller, manageable pieces.
            </Text>
          </View>
        </View>

        <Text style={[styles.bottomText, { color: theme.secondaryText }]}>
          YOUR TASKS · YOUR WAY
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
}



const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    paddingHorizontal: 18,
    paddingTop: 125,
    paddingBottom: 35,
  },
  header: {
    marginBottom: 24,
  },
  eyebrow: {
    fontSize: 10,
    fontWeight: '800',
    letterSpacing: 2.5,
    marginBottom: 9,
    color: '#0F766E',
  },
  heading: {
    fontSize: 33,
    fontWeight: '900',
    letterSpacing: -1,
    color: '#163047',
  },
  subtitle: {
    fontSize: 14,
    lineHeight: 22,
    marginTop: 8,
    color: '#64748B',
  },
  summaryRow: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 29,
  },
  summaryCard: {
    flex: 1,
    minHeight: 108,
    borderRadius: 23,
    padding: 18,
    justifyContent: 'center',
    backgroundColor: '#164E63',
    elevation: 5,
    shadowColor: '#164E63',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.18,
    shadowRadius: 10,
  },
  summarySecondary: {
    backgroundColor: '#DDF4F1',
    borderWidth: 1,
    borderColor: '#B8E4DF',
  },
  summaryNumber: {
    fontSize: 32,
    fontWeight: '900',
    color: '#FFFFFF',
  },
  summaryLabel: {
    fontSize: 12,
    fontWeight: '600',
    color: '#D9F5F1',
    marginTop: 4,
  },
  summaryNumberSecondary: {
    fontSize: 32,
    fontWeight: '900',
    color: '#164E63',
  },
  summaryLabelSecondary: {
    fontSize: 12,
    fontWeight: '600',
    color: '#477477',
    marginTop: 4,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '800',
    color: '#163047',
  },
  sectionHint: {
    fontSize: 11,
    color: '#64748B',
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    rowGap: 14,
  },
  categoryCard: {
    width: '48.2%',
    borderRadius: 23,
    padding: 15,
    minHeight: 190,
    justifyContent: 'flex-start',
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#DCE6ED',
    elevation: 4,
    shadowColor: '#163047',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.07,
    shadowRadius: 10,
  },
  cardTop: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 17,
  },
  categoryIcon: {
    width: 48,
    height: 48,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#E0F2FE',
    borderWidth: 1,
    borderColor: '#BAE6FD',
  },
  emoji: {
    fontSize: 23,
  },
  arrowCircle: {
    width: 30,
    height: 30,
    borderRadius: 11,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FCE7D8',
  },
  arrow: {
    fontSize: 15,
    fontWeight: '800',
    color: '#C2410C',
  },
  categoryTitle: {
    fontSize: 16,
    fontWeight: '800',
    color: '#163047',
  },
  categorySubtitle: {
    fontSize: 11,
    lineHeight: 17,
    marginTop: 5,
    minHeight: 34,
    color: '#64748B',
  },
  cardDivider: {
    height: 1,
    marginVertical: 10,
    backgroundColor: '#E2E8F0',
  },
  taskCount: {
    fontSize: 11,
    fontWeight: '800',
    color: '#0F766E',
  },
  selectedBanner: {
    marginTop: 18,
    padding: 17,
    borderRadius: 18,
    borderWidth: 1,
    borderColor: '#99D9D0',
    backgroundColor: '#DDF4F1',
    gap: 5,
  },
  selectedText: {
    fontSize: 15,
    fontWeight: '800',
    color: '#164E63',
  },
  selectedHint: {
    fontSize: 12,
    lineHeight: 18,
    color: '#477477',
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 14,
    marginTop: 22,
    padding: 18,
    borderRadius: 22,
    borderWidth: 1,
    borderColor: '#DCE6ED',
    backgroundColor: '#FFFFFF',
  },
  footerIcon: {
    fontSize: 27,
    color: '#0F766E',
  },
  footerContent: {
    flex: 1,
    gap: 5,
  },
  footerTitle: {
    fontSize: 15,
    fontWeight: '800',
    color: '#163047',
  },
  footerDescription: {
    fontSize: 12,
    lineHeight: 19,
    color: '#64748B',
  },
  bottomText: {
    textAlign: 'center',
    fontSize: 10,
    fontWeight: '700',
    letterSpacing: 1.5,
    marginTop: 22,
    color: '#64748B',
  },
});
