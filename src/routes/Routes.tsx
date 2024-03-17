import React, { useContext } from "react"
import TabRoutes from "@/routes/TabRoutes"
import StackRoutes from "@/routes/StackRoutes"
import { AuthContext } from "@/shared/context/auth/AuthContext"
import { NavigationContainer } from "@react-navigation/native"

const Routes = () => {
  const { tokens } = useContext(AuthContext)

  return (
    <NavigationContainer>
      {tokens.accessToken ? <TabRoutes /> : <StackRoutes />}
    </NavigationContainer>
  )
}
export default Routes
