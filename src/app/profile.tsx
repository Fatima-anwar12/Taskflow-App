
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
} from 'react-native';
import TopNavbar from '../components/TopNavbar';

export default function ProfileScreen() {
  return (
    <View style={styles.screen}>
      <TopNavbar />

      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.heading}>My Profile</Text>
        <Text style={styles.subtitle}>
          Manage your personal information.
        </Text>

        <View style={styles.profileCard}>
          <View style={styles.avatar}>
            <Text style={styles.avatarText}>U</Text>
          </View>

          <Text style={styles.name}>fatima_1o</Text>
          <Text style={styles.email}>user@taskflow.com</Text>

          <View style={styles.badge}>
            <Text style={styles.badgeText}>TaskFlow Member</Text>
          </View>
        </View>

        <Text style={styles.sectionTitle}>Account Information</Text>

        <View style={styles.infoCard}>
          <Text style={styles.label}>Full Name</Text>
          <Text style={styles.value}>Fatima Anwar</Text>

          <View style={styles.divider} />

          <Text style={styles.label}>Email Address</Text>
          <Text style={styles.value}>user@taskflow.com</Text>

          <View style={styles.divider} />

          <Text style={styles.label}>Account Type</Text>
          <Text style={styles.value}>Personal Account</Text>
        </View>

        <Text style={styles.sectionTitle}>My Activity</Text>

        <View style={styles.activityCard}>
          <Text style={styles.activityIcon}>✓</Text>
          <View style={styles.activityContent}>
            <Text style={styles.activityTitle}>Task Management</Text>
            <Text style={styles.activityDescription}>
              Keep your daily tasks organized with TaskFlow.
            </Text>
          </View>
        </View>

        <Text style={styles.footer}>
          TaskFlow · Stay organized, stay productive.
        </Text>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#2b1955',
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
    color: '#123B46',
    letterSpacing: -0.7,
  },
  subtitle: {
    fontSize: 15,
    lineHeight: 22,
    color: '#648087',
    marginBottom: 8,
  },
  profileCard: {
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 26,
    paddingVertical: 28,
    paddingHorizontal: 20,
    borderWidth: 1,
    borderColor: '#D5ECE8',
    elevation: 5,
    shadowColor: '#0F766E',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.09,
    shadowRadius: 12,
  },
  avatar: {
    width: 94,
    height: 94,
    borderRadius: 47,
    backgroundColor: '#151227',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
    borderWidth: 4,
    borderColor: '#3d4b48',
    elevation: 3,
  },
  avatarText: {
    fontSize: 36,
    fontWeight: '800',
    color: '#FFFFFF',
  },
  name: {
    fontSize: 23,
    fontWeight: '800',
    color: '#123B46',
    textAlign: 'center',
  },
  email: {
    fontSize: 14,
    color: '#71878C',
    marginTop: 7,
  },
  badge: {
    backgroundColor: '#CCFBF1',
    paddingHorizontal: 16,
    paddingVertical: 9,
    borderRadius: 22,
    marginTop: 16,
    borderWidth: 1,
    borderColor: '#99F6E4',
  },
  badgeText: {
    fontSize: 12,
    fontWeight: '700',
    color: '#0F766E',
    letterSpacing: 0.3,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '800',
    color: '#123B46',
    marginTop: 8,
    letterSpacing: -0.3,
  },
  infoCard: {
    backgroundColor: '#FFFFFF',
    padding: 20,
    borderRadius: 22,
    borderWidth: 1,
    borderColor: '#DCEBE9',
    elevation: 3,
    shadowColor: '#164E63',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
  },
  label: {
    fontSize: 12,
    fontWeight: '600',
    color: '#789096',
    marginBottom: 7,
    letterSpacing: 0.4,
  },
  value: {
    fontSize: 16,
    fontWeight: '700',
    color: '#164E63',
  },
  divider: {
    height: 1,
    backgroundColor: '#E5F0EF',
    marginVertical: 17,
  },
  activityCard: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 15,
    backgroundColor: '#FFFFFF',
    padding: 18,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#DCEBE9',
    elevation: 3,
    shadowColor: '#164E63',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
  },
  activityIcon: {
    fontSize: 25,
    color: '#0F766E',
    fontWeight: '800',
    backgroundColor: '#CCFBF1',
    overflow: 'hidden',
    borderRadius: 14,
    padding: 10,
    textAlign: 'center',
  },
  activityContent: {
    flex: 1,
    gap: 6,
  },
  activityTitle: {
    fontSize: 16,
    fontWeight: '800',
    color: '#164E63',
  },
  activityDescription: {
    fontSize: 13,
    lineHeight: 20,
    color: '#71878C',
  },
  footer: {
    textAlign: 'center',
    fontSize: 12,
    color: '#8AA1A5',
    marginTop: 14,
    letterSpacing: 0.5,
  },
});