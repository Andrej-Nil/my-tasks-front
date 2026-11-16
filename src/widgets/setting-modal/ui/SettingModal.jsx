import {Modal} from "@/shared/ui/modal";
import {useSettingModal} from "@/shared/model/setting-modal/setting-modal";

const SettingModal = () => {

    const isOpen = useSettingModal((state) => state.isOpen)
    const close = useSettingModal((state) => state.close)

    if(!isOpen) return null;
    return (
        <Modal onClose={close} containerSize={'small'}>
            <div className="block">
                <h2>Настройки</h2>
            </div>

        </Modal>
    )
}

export default SettingModal;

