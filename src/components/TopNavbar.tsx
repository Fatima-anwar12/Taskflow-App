

import { View, Text, Pressable, StyleSheet } from 'react-native';
import { usePathname, useRouter } from 'expo-router';
import { BlurView } from 'expo-blur';

const pages = [
  { title: 'Home', path: '/' },
  { title: 'About', path: '/about' },
  { title: 'Categories', path: '/explore' },
  { title: 'FAQ', path: '/faq' },
  { title: 'Profile', path: '/profile' },
];

export default function TopNavbar() {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <View style={styles.wrapper}>
      <BlurView intensity={85} tint="dark" style={styles.navbar}>
        {pages.map((page) => {
          const active =
            pathname === page.path ||
            (page.path === '/' && pathname === '/index');

          return (
            <Pressable
              key={page.path}
              onPress={() => router.push(page.path as any)}
              style={[
                styles.navItem,
                active && styles.activeItem,
              ]}
            >
              <Text
                numberOfLines={1}
                style={[
                  styles.navText,
                  active && styles.activeText,
                ]}
              >
                {page.title}
              </Text>
            </Pressable>
          );
        })}
      </BlurView>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    position: 'absolute',
    top: 48,
    left: 16,
    right: 16,
    zIndex: 100,
    borderRadius: 24,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: 'rgba(196,181,253,0.4)',
    elevation: 12,
    shadowColor: '#4F46E5',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.22,
    shadowRadius: 18,
  },
  navbar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingHorizontal: 5,
    paddingVertical: 8,
    backgroundColor: 'rgba(49,46,129,0.48)',
  },
  navItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    borderRadius: 16,
    marginHorizontal: 2,
  },
  activeItem: {
    backgroundColor: 'rgba(167,139,250,0.9)',
  },
  navText: {
    fontSize: 10,
    fontWeight: '700',
    color: '#E9DFFF',
  },
  activeText: {
    color: '#211E35',
  },
});
