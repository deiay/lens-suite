import { useCallback, useState, useRef } from 'react'

export const useModal = (initialShowModal?: boolean) => {
	const refToRestoreFocus = useRef<HTMLElement | null>(null)
	const [showModal, setShowModal] = useState(initialShowModal || false)

	const onModalClose = useCallback(() => {
		setShowModal(false)
	}, [setShowModal])

	const onModalOpen = useCallback(() => {
		setShowModal(true)
	}, [setShowModal])

	const onModalToggle = useCallback(() => {
		setShowModal(!showModal)
	}, [setShowModal, showModal])

	return {
		showModal,
		onModalClose,
		onModalOpen,
		onModalToggle,
		refToRestoreFocus,
	}
}
