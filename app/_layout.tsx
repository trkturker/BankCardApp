import "../global.css"
import { Stack } from 'expo-router'
import { useState } from 'react'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'

const Layout = () => {
  const [queryClient] = useState(new QueryClient());
  
  return (
    <QueryClientProvider client={queryClient}>
      <Stack>
        <Stack.Screen
          name="(tabs)"
          options={{
            title: "Anasaya",
            headerShown: false, 
          }}
        />
      </Stack>
    </QueryClientProvider>
  )
}

export default Layout