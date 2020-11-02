import React, { useEffect } from 'react'
import { ActivityIndicator, View, TouchableOpacity } from 'react-native'
import { Layout, Gutters } from '@/Theme'
import { Brand } from '@/Components'
import { useDispatch, useSelector } from 'react-redux'
import InitStartup from '@/Store/Startup/Init'
import { CommonActions } from '@react-navigation/native'

const IndexStartupContainer = ({ navigation }) => {

  const dispatch = useDispatch()
  const isApplicationLoading = useSelector((state) => state.startup.loading)

  useEffect(() => {
    dispatch(InitStartup.action())
  }, [dispatch])

  return (
    <TouchableOpacity
      style={[Layout.fill, Layout.rowCenter]}
      onPress={() =>
        navigation.dispatch(
          CommonActions.reset({
            index: 0,
            routes: [{ name: 'Main' }],
          }),
        )
      }
    >
      {isApplicationLoading ? (
        <ActivityIndicator />
      ) : (
        <View style={[[Layout.colCenter, Gutters.smallHPadding]]}>
          <Brand />
        </View>
      )}
    </TouchableOpacity>
  )
}

export default IndexStartupContainer
