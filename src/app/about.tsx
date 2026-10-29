
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  useColorScheme,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import TopNavbar from '../components/TopNavbar';
import { colors } from '../constants/colors';

const features = [
  {
    icon: '🎯',
    title: 'Stay Focused',
    description: 'Give your attention to the things that matter most.',
    color: '#E2EBFF',
    iconColor: '#355DA8',
  },
  {
    icon: '📅',
    title: 'Plan Your Day',
    description: 'Bring your daily plans and priorities together.',
    color: '#F0E7FF',
    iconColor: '#7950B5',
  },
  {
    icon: '⚡',
    title: 'Make Progress',
    description: 'Turn small daily actions into meaningful progress.',
    color: '#DDF7F0',
    iconColor: '#087F70',
  },
  {
    icon: '🌱',
    title: 'Build Better Habits',
    description: 'Create a routine that works for your lifestyle.',
    color: '#FFF0D9',
    iconColor: '#A56316',
  },
];

export default function AboutScreen() {
  const isDark = useColorScheme() === 'dark';
  const theme = isDark ? colors.dark : colors.light;

  return (
    <SafeAreaView
      style={[styles.safeArea, { backgroundColor: theme.background }]}
    >
      <TopNavbar />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.container}
      >
        <Text style={styles.eyebrow}>A LITTLE ABOUT US</Text>

        <Text style={[styles.pageTitle, { color: theme.text }]}>
          Meet TaskFlow
          <Text style={styles.titleAccent}>.</Text>
        </Text>

        <Text style={[styles.pageSubtitle, { color: theme.secondaryText }]}>
          Your everyday companion for a more organized life.
        </Text>

        {/* Dark navy hero card */}
        <View style={styles.heroCard}>
          <View style={styles.heroTopRow}>
            <View style={styles.logoBox}>
              <Text style={styles.logoText}>T</Text>
            </View>

            <View style={styles.badge}>
              <View style={styles.statusDot} />
              <Text style={styles.badgeText}>YOUR DAILY SPACE</Text>
            </View>
          </View>

          <Text style={styles.heroTitle}>
            Make room for{'\n'}
            <Text style={styles.heroAccent}>what matters.</Text>
          </Text>

          <Text style={styles.heroDescription}>
            Life gets busy. TaskFlow helps you organize your tasks, clear your
            mind, and focus on one step at a time.
          </Text>

          <View style={styles.heroDivider} />

          <View style={styles.heroBottom}>
            <View>
              <Text style={styles.heroSmallLabel}>DESIGNED FOR</Text>
              <Text style={styles.heroSmallValue}>Your everyday</Text>
            </View>

            <View style={styles.starCircle}>
              <Text style={styles.star}>✦</Text>
            </View>
          </View>
        </View>

        {/* Purpose section */}
        <View style={styles.sectionHeader}>
          <View>
            <Text style={[styles.sectionEyebrow, { color: theme.primary }]}>
              OUR PURPOSE
            </Text>
            <Text style={[styles.sectionTitle, { color: theme.text }]}>
              A better daily flow
            </Text>
          </View>
        </View>

        <Text style={[styles.introText, { color: theme.secondaryText }]}>
          TaskFlow is built around a simple idea: staying organized should feel
          easy, not overwhelming. Keep your plans clear and your next step in
          sight.
        </Text>

        {/* Feature cards */}
        <View style={styles.featuresGrid}>
          {features.map((feature) => (
            <View
              key={feature.title}
              style={[
                styles.featureCard,
                {
                  backgroundColor: theme.card,
                  borderColor: theme.border,
                },
              ]}
            >
              <View
                style={[
                  styles.featureIcon,
                  { backgroundColor: feature.color },
                ]}
              >
                <Text style={styles.featureEmoji}>{feature.icon}</Text>
              </View>

              <Text style={[styles.featureTitle, { color: theme.text }]}>
                {feature.title}
              </Text>

              <Text
                style={[
                  styles.featureDescription,
                  { color: theme.secondaryText },
                ]}
              >
                {feature.description}
              </Text>
            </View>
          ))}
        </View>

        {/* Closing card */}
        <View style={styles.closingCard}>
          <View style={styles.closingIcon}>
            <Text style={styles.closingStar}>✦</Text>
          </View>

          <Text style={styles.closingTitle}>
            Small steps.{'\n'}Meaningful progress.
          </Text>

          <Text style={styles.closingDescription}>
            Your goals, your routine, your pace. Let’s make every day count.
          </Text>
        </View>

        <Text style={[styles.footer, { color: theme.secondaryText }]}>
          TASKFLOW  ·  FIND YOUR FLOW
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
    paddingHorizontal: 20,
    paddingTop: 125,
    paddingBottom: 35,
  },
  eyebrow: {
    color: '#6366F1',
    fontSize: 10,
    fontWeight: '800',
    letterSpacing: 2.5,
    marginBottom: 9,
  },
  pageTitle: {
    fontSize: 34,
    fontWeight: '900',
    letterSpacing: -1,
  },
  titleAccent: {
    color: '#6366F1',
  },
  pageSubtitle: {
    fontSize: 14,
    lineHeight: 22,
    marginTop: 8,
    marginBottom: 23,
  },
  heroCard: {
    backgroundColor: '#312E81',
    borderRadius: 27,
    padding: 23,
    overflow: 'hidden',
    elevation: 7,
    shadowColor: '#312E81',
    shadowOffset: { width: 0, height: 7 },
    shadowOpacity: 0.2,
    shadowRadius: 13,
  },
  heroTopRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 26,
    gap: 8,
  },
  logoBox: {
    width: 46,
    height: 46,
    borderRadius: 15,
    backgroundColor: '#6366F1',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoText: {
    fontSize: 27,
    fontWeight: '900',
    color: '#FFFFFF',
  },
  badge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 7,
    backgroundColor: '#433F86',
    paddingHorizontal: 10,
    paddingVertical: 9,
    borderRadius: 20,
  },
  statusDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#A5F3D0',
  },
  badgeText: {
    color: '#E0E7FF',
    fontSize: 9,
    fontWeight: '800',
    letterSpacing: 0.8,
  },
  heroTitle: {
    fontSize: 30,
    fontWeight: '900',
    color: '#FFFFFF',
    lineHeight: 39,
    letterSpacing: -0.6,
  },
  heroAccent: {
    color: '#A5F3FC',
  },
  heroDescription: {
    fontSize: 13,
    color: '#E0E7FF',
    lineHeight: 23,
    marginTop: 14,
  },
  heroDivider: {
    height: 1,
    backgroundColor: '#56539A',
    marginVertical: 20,
  },
  heroBottom: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  heroSmallLabel: {
    fontSize: 9,
    color: '#C7D2FE',
    fontWeight: '700',
    letterSpacing: 1.5,
  },
  heroSmallValue: {
    fontSize: 14,
    color: '#FFFFFF',
    fontWeight: '800',
    marginTop: 5,
  },
  starCircle: {
    width: 42,
    height: 42,
    borderRadius: 15,
    backgroundColor: '#433F86',
    alignItems: 'center',
    justifyContent: 'center',
  },
  star: {
    fontSize: 25,
    color: '#A5F3FC',
  },
  sectionHeader: {
    marginTop: 30,
    marginBottom: 10,
  },
  sectionEyebrow: {
    fontSize: 10,
    fontWeight: '800',
    letterSpacing: 2,
    marginBottom: 7,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: '900',
    letterSpacing: -0.4,
  },
  introText: {
    fontSize: 13,
    lineHeight: 23,
    marginBottom: 19,
  },
  featuresGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    rowGap: 13,
  },
  featureCard: {
    width: '48.2%',
    minHeight: 177,
    borderRadius: 21,
    padding: 15,
    borderWidth: 1,
    elevation: 2,
    shadowColor: '#312E81',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.07,
    shadowRadius: 7,
  },
  featureIcon: {
    width: 45,
    height: 45,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 15,
  },
  featureEmoji: {
    fontSize: 22,
  },
  featureTitle: {
    fontSize: 14,
    fontWeight: '800',
    lineHeight: 20,
  },
  featureDescription: {
    fontSize: 11,
    lineHeight: 18,
    marginTop: 7,
  },
  closingCard: {
    backgroundColor: '#DCEBFA',
    borderRadius: 25,
    padding: 23,
    marginTop: 24,
    borderWidth: 1,
    borderColor: '#AFC9F4',
  },
  closingIcon: {
    width: 40,
    height: 40,
    borderRadius: 14,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 15,
  },
  closingStar: {
    color: '#4F46E5',
    fontSize: 23,
  },
  closingTitle: {
    fontSize: 23,
    lineHeight: 30,
    fontWeight: '900',
    color: '#202447',
  },
  closingDescription: {
    fontSize: 13,
    lineHeight: 22,
    color: '#465675',
    marginTop: 10,
  },
  footer: {
    fontSize: 10,
    fontWeight: '800',
    letterSpacing: 1.5,
    textAlign: 'center',
    marginTop: 23,
  },
});
