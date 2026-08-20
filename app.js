import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  ImageBackground,
  Image,
  TouchableOpacity,
  TextInput,
  SafeAreaView,
  StatusBar,
  Dimensions,
  FlatList,
  LayoutAnimation,
  Platform,
  UIManager,
} from 'react-native';

const { width: SCREEN_WIDTH } = Dimensions.get('window');

// Enable layout animations for accordion menus on Android
if (Platform.OS === 'android' && UIManager.setLayoutAnimationEnabledExperimental) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

// Custom Theme Colors (matching your Tailwind Config)
const COLORS = {
  primary: '#f2ca50',
  onPrimary: '#3c2f00',
  surface: '#121414',
  surfaceContainer: '#1e2020',
  surfaceContainerLow: '#1a1c1c',
  surfaceContainerLowest: '#0c0f0f',
  onSurface: '#e2e2e2',
  onSurfaceVariant: '#d0c5af',
  outline: '#99907c',
  outlineVariant: '#4d4635',
};

export default function App() {
  // --- Form State ---
  const [date, setDate] = useState('');
  const [time, setTime] = useState('20:00');
  const [guests, setGuests] = useState('2');
  const [bookingConfirmed, setBookingConfirmed] = useState(false);

  // --- Accordion Toggle State ---
  const [expandedSection, setExpandedSection] = useState('starters');

  const toggleAccordion = (section) => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setExpandedSection(expandedSection === section ? null : section);
  };

  const handleBooking = () => {
    setBookingConfirmed(true);
    setTimeout(() => setBookingConfirmed(false), 3000);
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={COLORS.surface} />

      {/* 1. Header Bar */}
      <View style={styles.navBar}>
        <Text style={styles.logoText}>MIDNIGHT GILT</Text>
        <TouchableOpacity style={styles.navButton} activeOpacity={0.8}>
          <Text style={styles.navButtonText}>BOOK A TABLE</Text>
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        {/* 2. Hero Section */}
        <ImageBackground
          source={{ uri: 'https://lh3.googleusercontent.com/aida/AP1WRLtltPJKgCLmNkzcIRpY1vxT3vyDSFhK8GZkIN8UZlmWIEOBoYC2daUOshA6eDE-gRmtRflVC7n56JbwaL5zBKdCB1yE0L1JvnRiTaMVISXet4sFLXHCVqP3ET6GJWu3ObeUxz6SQhX6KMJB-l5ARC5DjjUAuHjZxwqKkNCQ4i_Rxcjxda5W8pYqkERswso7MFv-dLTzWZNU5K8uhFRnbTgabZlktzgrEKOXIWmU0g7835xEVsWBIpYSst8' }}
          style={styles.heroBackground}
          resizeMode="cover"
        >
          <View style={styles.heroOverlay}>
            <Text style={styles.heroTitle}>The Best Food Experience</Text>
            <Text style={styles.heroSubtitle}>
              Where culinary mastery meets an atmosphere of refined elegance. Experience the art of the perfect sear.
            </Text>
            <TouchableOpacity style={styles.goldButton} activeOpacity={0.85}>
              <Text style={styles.goldButtonText}>RESERVE A TABLE</Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>

        {/* 3. Heritage / About Section */}
        <View style={styles.sectionPadding}>
          <Text style={styles.sectionTag}>OUR HERITAGE</Text>
          <Text style={styles.sectionHeading}>Crafting Excellence Since the First Sizzle</Text>
          <Text style={styles.bodyText}>
            At L'Elite Steakhouse, we believe that dining is not merely a transaction, but a theatrical performance.
            Our journey began with a single vision: to source the finest wagyu and prime cuts globally.
          </Text>
          <Image
            source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB221sg1hDLB9i-FGPdHUMjiS2Ma5pF7gFY4tzkZBmblN3S8WotSAfMQSPptEZVYfl9pZ4xVCoz5Uz3naeCeGdoSOONCEFCeiE_gikhPmaPaalguCMrOa_aQJtMKYYiZKRvzmKY0etUhFS2ptgWUmU1vRPq7GZcONvaqTGRGP6wrw2LNcj_wfjpCevuOAxWBQLcLEPBua57KJIU2SAIDcoSxrDUI2qkbrHPGj52hr1dQQFW8yLOpcRk' }}
            style={styles.heritageImage}
          />
        </View>

        {/* 4. Chef's Masterpieces Carousel */}
        <View style={[styles.sectionPadding, { backgroundColor: COLORS.surfaceContainerLow }]}>
          <Text style={styles.sectionTag}>SELECTED FOR YOU</Text>
          <Text style={styles.sectionHeading}>Chef's Masterpieces</Text>

          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.carouselContainer}>
            {/* Dish 1 */}
            <View style={styles.dishCard}>
              <Image source={{ uri: 'https://lh3.googleusercontent.com/aida/AP1WRLsDTbPvKu6NugLAQFj8-mzKFnwfQ7_oktYYgoZJTByJXc7YW_il4nBJ5f0ICI78gd247HQcr4U85KKnvj6r6ZS3z9-Dp2GRfJXJj6kGfMnkpj2RqQ6BRp7e8yIPhEyZKZBnghwdFG2pjrbniYA26_UpSgcX7aNg_i2-Yg2Y3e8GljjVG5R3f9XxYK7TdLRQjhCabSTI70PgeNL02ft5MhuXheq24lFj1z-sTQ4NGHFpIU2qxUm75DOUi9k' }} style={styles.dishImage} />
              <View style={styles.dishHeader}>
                <Text style={styles.dishTitle}>Wagyu Gold</Text>
                <Text style={styles.dishPrice}>$125</Text>
              </View>
              <Text style={styles.dishDescription}>A5 Grade Miyazaki wagyu, truffle emulsion, charred leeks.</Text>
            </View>

            {/* Dish 2 */}
            <View style={[styles.dishCard, { borderColor: COLORS.primary, borderWidth: 1 }]}>
              <Image source={{ uri: 'https://lh3.googleusercontent.com/aida/AP1WRLvy04J8S3Tt2ymyO2Ki42MQ4wRZOAfqdfUCtlNuQ0UyekuzywoS3Xr3NGTdGh4g_G5ErAIaIw09UaeOCHZu6LGHfOhByg7aWUnoZW1AiT8mdASs_cDvmwl9jHw_FSB1QAbQ9w0sPYmb4VQ1SqlZEvoYqHyanObkccRAe9hFEaPMSkc0v75SocuJnAjgXHSFshWICyOx8oyrPqqmagSvYqP41il-uR-WwGcH5Y1a_GpILDyMpA5M6Cqj7Kg' }} style={styles.dishImage} />
              <Text style={styles.badgeText}>CHEF'S FAVORITE</Text>
              <View style={styles.dishHeader}>
                <Text style={styles.dishTitle}>Ocean Symphony</Text>
                <Text style={styles.dishPrice}>$85</Text>
              </View>
              <Text style={styles.dishDescription}>Sustainable seafood medley, saffron foam, charred citrus.</Text>
            </View>

            {/* Dish 3 */}
            <View style={styles.dishCard}>
              <Image source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCxvsQ5WHfle2G1yDV9GaDcivxXpLZM0VJw2goM9UpvHPs7tAMyZe6dptQJWDFXRWv9j9UVBVmemtnzPvL_QOs22hof3U7-fDdREkRyCARNL98Mv0zCz3GBKgmnH2E3Nea3CUqvw55P4icGOr14nVGYZ9stRRe51FPEK4y3JiXOugV46Y_K1gwgWRR73Vpoj0LfXMI1g_X_QjCyAiWY4u00b3S5sTOV-MDdfWROeDo83AsURBMT18yQ' }} style={styles.dishImage} />
              <View style={styles.dishHeader}>
                <Text style={styles.dishTitle}>Velvet Rack</Text>
                <Text style={styles.dishPrice}>$68</Text>
              </View>
              <Text style={styles.dishDescription}>Herb-encrusted lamb, mint gremolata, purple potato purée.</Text>
            </View>
          </ScrollView>
        </View>

        {/* 5. Menu Accordion Section */}
        <View style={[styles.sectionPadding, { backgroundColor: COLORS.surfaceContainerLowest }]}>
          <Text style={styles.sectionTag}>L'ELITE STEAKHOUSE</Text>
          <Text style={styles.sectionHeading}>The Gourmet Collection</Text>

          {/* Starters Accordion */}
          <TouchableOpacity style={styles.accordionHeader} onPress={() => toggleAccordion('starters')}>
            <Text style={styles.accordionTitle}>Starters</Text>
            <Text style={styles.accordionIcon}>{expandedSection === 'starters' ? '−' : '+'}</Text>
          </TouchableOpacity>
          {expandedSection === 'starters' && (
            <View style={styles.accordionContent}>
              <MenuItem title="Bone Marrow" price="24" desc="Roasted cross-cut veal bone marrow, herb gremolata." />
              <MenuItem title="Wagyu Tartare" price="32" desc="Hand-cut A5 Wagyu, quail egg yolk, capers." />
              <MenuItem title="Truffle Arancini" price="18" desc="Wild mushroom risotto balls, black truffle oil." />
            </View>
          )}

          {/* Steaks Accordion */}
          <TouchableOpacity style={styles.accordionHeader} onPress={() => toggleAccordion('steaks')}>
            <Text style={styles.accordionTitle}>Signature Steaks</Text>
            <Text style={styles.accordionIcon}>{expandedSection === 'steaks' ? '−' : '+'}</Text>
          </TouchableOpacity>
          {expandedSection === 'steaks' && (
            <View style={styles.accordionContent}>
              <MenuItem title="Dry-Aged Tomahawk" price="145" desc="45-day dry-aged, bone-in ribeye with garlic cloves." highlight />
              <MenuItem title="Filet Mignon (8oz)" price="64" desc="Center-cut prime, bordelaise sauce, potato puree." />
              <MenuItem title="A5 Japanese Wagyu" price="185" desc="Miyazaki prefecture, served with fresh wasabi root." />
            </View>
          )}

          {/* Desserts Accordion */}
          <TouchableOpacity style={styles.accordionHeader} onPress={() => toggleAccordion('desserts')}>
            <Text style={styles.accordionTitle}>Decadent Desserts</Text>
            <Text style={styles.accordionIcon}>{expandedSection === 'desserts' ? '−' : '+'}</Text>
          </TouchableOpacity>
          {expandedSection === 'desserts' && (
            <View style={styles.accordionContent}>
              <MenuItem title="Midnight Chocolate" price="16" desc="70% Dark chocolate mousse, gold leaf." />
              <MenuItem title="Grand Marnier Soufflé" price="20" desc="Twice-baked, warm vanilla bean creme." />
            </View>
          )}
        </View>

        {/* 6. Reservation Section */}
        <View style={[styles.sectionPadding, styles.reservationContainer]}>
          <Text style={styles.sectionTag}>SECURE YOUR SEAT</Text>
          <Text style={styles.sectionHeading}>Reservations</Text>

          <View style={styles.formGroup}>
            <Text style={styles.label}>DATE</Text>
            <TextInput
              style={styles.input}
              placeholder="YYYY-MM-DD"
              placeholderTextColor="#666"
              value={date}
              onChangeText={setDate}
            />
          </View>

          <View style={styles.formGroup}>
            <Text style={styles.label}>TIME</Text>
            <TextInput
              style={styles.input}
              placeholder="20:00"
              placeholderTextColor="#666"
              value={time}
              onChangeText={setTime}
            />
          </View>

          <View style={styles.formGroup}>
            <Text style={styles.label}>NUMBER OF GUESTS</Text>
            <TextInput
              style={styles.input}
              keyboardType="numeric"
              placeholder="2"
              placeholderTextColor="#666"
              value={guests}
              onChangeText={setGuests}
            />
          </View>

          <TouchableOpacity
            style={[styles.goldButton, bookingConfirmed && { backgroundColor: '#16a34a' }]}
            onPress={handleBooking}
            activeOpacity={0.8}
          >
            <Text style={styles.goldButtonText}>
              {bookingConfirmed ? 'BOOKING CONFIRMED' : 'CONFIRM BOOKING'}
            </Text>
          </TouchableOpacity>
        </View>

        {/* 7. Footer */}
        <View style={styles.footer}>
          <Text style={styles.logoText}>MIDNIGHT GILT</Text>
          <Text style={styles.footerAddress}>888 Obsidian Ave, Central City, NY 10001</Text>
          <Text style={styles.footerContact}>+1 (555) 888-GILT</Text>
          <Text style={styles.copyright}>© 2026 Midnight Gilt. All rights reserved.</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

// Component for Individual Menu Item
const MenuItem = ({ title, price, desc, highlight }) => (
  <View style={[styles.menuItem, highlight && styles.highlightedMenuItem]}>
    <View style={styles.menuItemHeader}>
      <Text style={styles.menuItemTitle}>{title}</Text>
      <Text style={styles.menuItemPrice}>${price}</Text>
    </View>
    <Text style={styles.menuItemDesc}>{desc}</Text>
  </View>
);

// --- React Native Stylesheet ---
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.surface,
  },
  navBar: {
    height: 60,
    backgroundColor: COLORS.surface,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.surfaceContainerLow,
  },
  logoText: {
    color: COLORS.primary,
    fontSize: 16,
    fontWeight: 'bold',
    letterSpacing: 2,
  },
  navButton: {
    backgroundColor: COLORS.primary,
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 6,
  },
  navButtonText: {
    color: COLORS.onPrimary,
    fontWeight: 'bold',
    fontSize: 12,
  },
  scrollContent: {
    flexGrow: 1,
  },
  heroBackground: {
    height: 480,
    justifyContent: 'center',
  },
  heroOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.65)',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 24,
  },
  heroTitle: {
    color: COLORS.onSurface,
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 12,
  },
  heroSubtitle: {
    color: COLORS.onSurfaceVariant,
    fontSize: 15,
    textAlign: 'center',
    lineHeight: 22,
    marginBottom: 24,
  },
  goldButton: {
    backgroundColor: COLORS.primary,
    paddingVertical: 14,
    paddingHorizontal: 32,
    borderRadius: 30,
    width: '100%',
    alignItems: 'center',
  },
  goldButtonText: {
    color: COLORS.onPrimary,
    fontWeight: 'bold',
    letterSpacing: 1.5,
    fontSize: 13,
  },
  sectionPadding: {
    paddingVertical: 40,
    paddingHorizontal: 20,
  },
  sectionTag: {
    color: COLORS.primary,
    fontSize: 12,
    fontWeight: 'bold',
    letterSpacing: 2,
    marginBottom: 6,
  },
  sectionHeading: {
    color: COLORS.onSurface,
    fontSize: 26,
    fontWeight: '600',
    marginBottom: 16,
  },
  bodyText: {
    color: COLORS.onSurfaceVariant,
    fontSize: 15,
    lineHeight: 24,
    marginBottom: 20,
  },
  heritageImage: {
    width: '100%',
    height: 250,
    borderRadius: 8,
    marginTop: 10,
  },
  carouselContainer: {
    marginTop: 10,
  },
  dishCard: {
    backgroundColor: COLORS.surfaceContainer,
    width: SCREEN_WIDTH * 0.72,
    padding: 16,
    borderRadius: 12,
    marginRight: 16,
  },
  dishImage: {
    width: '100%',
    height: 160,
    borderRadius: 8,
    marginBottom: 12,
  },
  badgeText: {
    color: COLORS.primary,
    fontSize: 10,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  dishHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  dishTitle: {
    color: COLORS.onSurface,
    fontSize: 18,
    fontWeight: 'bold',
  },
  dishPrice: {
    color: COLORS.primary,
    fontSize: 18,
    fontWeight: 'bold',
  },
  dishDescription: {
    color: COLORS.onSurfaceVariant,
    fontSize: 13,
    lineHeight: 18,
  },
  accordionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 18,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.outlineVariant,
  },
  accordionTitle: {
    color: COLORS.onSurface,
    fontSize: 18,
    fontWeight: '500',
  },
  accordionIcon: {
    color: COLORS.primary,
    fontSize: 22,
  },
  accordionContent: {
    paddingVertical: 12,
  },
  menuItem: {
    marginVertical: 8,
    paddingBottom: 8,
  },
  highlightedMenuItem: {
    borderLeftWidth: 2,
    borderLeftColor: COLORS.primary,
    paddingLeft: 10,
  },
  menuItemHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 4,
  },
  menuItemTitle: {
    color: COLORS.onSurface,
    fontSize: 16,
    fontWeight: 'bold',
  },
  menuItemPrice: {
    color: COLORS.primary,
    fontSize: 16,
    fontWeight: 'bold',
  },
  menuItemDesc: {
    color: COLORS.onSurfaceVariant,
    fontSize: 13,
    fontStyle: 'italic',
  },
  reservationContainer: {
    backgroundColor: COLORS.surfaceContainerLow,
    borderTopWidth: 1,
    borderTopColor: COLORS.outlineVariant,
  },
  formGroup: {
    marginBottom: 20,
  },
  label: {
    color: COLORS.primary,
    fontSize: 10,
    fontWeight: 'bold',
    letterSpacing: 1.5,
    marginBottom: 8,
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: COLORS.outline,
    color: COLORS.onSurface,
    paddingVertical: 10,
    fontSize: 16,
  },
  footer: {
    backgroundColor: COLORS.surfaceContainerLowest,
    padding: 30,
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: COLORS.outlineVariant,
  },
  footerAddress: {
    color: COLORS.onSurfaceVariant,
    marginTop: 12,
    fontSize: 13,
  },
  footerContact: {
    color: COLORS.onSurfaceVariant,
    marginTop: 4,
    fontSize: 13,
  },
  copyright: {
    color: COLORS.onSurfaceVariant,
    opacity: 0.5,
    marginTop: 20,
    fontSize: 11,
  },
});