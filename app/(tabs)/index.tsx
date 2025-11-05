import { View, Text, Image } from 'react-native';

import { Button } from '@/components/Button';
import { SafeAreaView } from 'react-native-safe-area-context';
import TopInfo from '@/components/TopInfo';
import CardSlider from '@/components/CardSlider';
import MoneyInfo from '@/components/MoneyInfo';
import QuickActions from '@/components/QuickActions';

export default function Home() {
  return (
    <SafeAreaView className="flex flex-1 py-6 bg-white px-6 font-sans">

      <TopInfo />
      <CardSlider />
      <MoneyInfo />
      <QuickActions />

    </SafeAreaView>
  );
}
