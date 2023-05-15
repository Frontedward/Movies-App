import React, { useEffect } from "react"
import { removeError, setError } from "../../store/reducers/error-reducer"
import { useAppDispatch } from "../../store/hooks"

function NetworkStatus(props) {
  const { children } = props
  const dispatch = useAppDispatch()

  useEffect(() => {
    const setNetworkError = () => {
      dispatch(
          setError({
            text: "Connection Error",
            description: "no internet connection",
            active: true
          })
      )
    }
    const removeNetworkError = () => {
      dispatch(removeError())
    }

    window.addEventListener("offline", setNetworkError)
    window.addEventListener("online", removeNetworkError)

    return () => {
      window.removeEventListener("offline", setNetworkError)
      window.removeEventListener("online", removeNetworkError)
    }
  }, [dispatch])

  return <>{children}</>
}

export default NetworkStatus
