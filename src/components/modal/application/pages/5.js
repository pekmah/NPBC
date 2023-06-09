import {Button} from '@/components/general';
import {BsArrowLeft} from 'react-icons/bs';
import Guidelines from './payment/Guidelines';
import Tables from './payment/Tables';

const Payment = ({handleCloseModal, switchToPrevious, switchToNext}) => {
    return (
        <div className={"text-c-blue w-full"}>
            {/*    Details      */}
            <div className={"flex"}>
                <Button className={"p-3"} onClick={switchToPrevious}>
                    <BsArrowLeft className={"text-2xl"}/>
                </Button>
                <div className={"flex items-center flex-col flex-1 text-center"}>
                    <h4 className={"c-h5 font-bold w-2/3 mx-auto"}>Here is everything you need to
                        Kindly Make your registration fee payment</h4>
                </div>
                <Button className={"p-3"} onClick={switchToNext}>
                    <BsArrowLeft className={"text-2xl rotate-180"}/>
                </Button>
            </div>

            <div className={"flex gap-5 py-8 border-b border-gray-400"}>
                {/*    Guidelines */}
                <Guidelines/>

                {/*    Tables   */}
                <Tables/>
            </div>

            {/*    buttons  */}
            <div className={"flex py-3"}>
                <Button className={"text-sm text-gray-500 font-bold"}>
                    Need Help?
                </Button>

                <div className={"flex gap-4 justify-end flex-1"}>
                    <Button onClick={handleCloseModal}
                            className={"bg-c-red-pale text-c-red py-3 px-14 text-sm font-semibold"} text={"close"}/>
                    <Button className={"bg-c-red outline-none text-white py-3 px-12 text-sm font-semibold"}
                            text={"Get Mpesa Prompt"}/>
                </div>
            </div>
        </div>
    );
};

export default Payment;
