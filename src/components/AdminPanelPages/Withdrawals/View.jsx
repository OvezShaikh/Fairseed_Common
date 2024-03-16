import { Form, Formik } from 'formik'
import React, { useState } from 'react'
import InputField from '../../inputs/InputAdminField/Index'
import AdminSelectField from '../../inputs/AdminSelectField/Index'
import SuccessButton from '../../inputs/SuccessButton/Index'
import PrimaryButton from '../../inputs/PrimaryButton'
import ErrorIcon from "@mui/icons-material/Error";
import { useLocation, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { useGetAll } from '../../../Hooks'



const initialValues = {

}


function View() {

    let { state } = useLocation();
    let { id } = state;
    const navigate = useNavigate();

    const [data, setData] = useState({});

    const copyRowToClipboard = () => {
        const rowData = document.getElementById('table-row').innerText;
        navigator.clipboard.writeText(rowData)
            .then(() => {
                console.log('Row copied to clipboard');
                toast.success('Copy to clipborad', { position: "bottom-center" })
                // Optionally, you can show a success message here
            })
            .catch(error => {
                console.error('Failed to copy row: ', error);
                toast.error('Fail to Copy!', { position: "bottom-center" })
            });
    };


    useGetAll({
        key: `/admin-dashboard/landing-page/${id}`,
        enabled: true,
        select: (data) => {
            console.log(data)
            return data.data.rows[0];
        },
        onSuccess: (data) => {
            console.log(data)
            setData(data);
        },
    })

    return (
        <Formik
            initialValues={{}}
        >
            <Form className='flex flex-col items-center '>
                <div className="flex gap-4 w-full max-desktop:flex-col max-desktop:gap-0 max-tablet:flex-col">
                    <div className="flex w-full gap-4 max-desktop:gap-0 max-tablet:flex-col">
                        <div className="w-full">
                            .<InputField name={"id"} placeholder={"Placeholder Text"} label={"ID:"} />
                        </div>
                        <div className="w-full">
                            .<InputField name={"Bank Details:"} placeholder={"Placeholder Text "} label={"Bank Details:"} />
                        </div>
                    </div>
                    <div className="flex w-full gap-4 max-desktop:gap-0 max-tablet:flex-col">

                        <div className="w-full">
                            .<InputField name={"amount"} placeholder={"Add Tag"} label={"Amount:"} />
                        </div>
                        <div className="w-full flex flex-col items-end justify-end max-tablet:pt-5">
                            <AdminSelectField name={"PaymentGateway"} placeholder={"Placeholder Text"} label={"Payment Gateway:"} />
                        </div>
                    </div>
                </div>
                <div className="flex gap-4 w-full  max-desktop:flex-col max-desktop:gap-0 max-tablet:flex-col max-tablet:pt-5">
                    <div className="flex w-full gap-4 max-desktop:gap-0 max-tablet:flex-col">

                        <div className="w-full">
                            .<InputField name={"PaymentDate"} type={'date'} placeholder={"Placeholder Text"} label={"Payment Date:    "} />
                        </div>
                        <div className="w-full">
                            .<InputField name={"Status"} placeholder={"Placeholder Text "} label={"Status:"} />
                        </div>
                    </div>
                    <div className="flex w-full gap-4 max-desktop:gap-0 max-tablet:flex-col">

                        <div className="w-full">
                            .<InputField name={"Link to privacy policy"} placeholder={"Placeholder Text"} label={"Link to privacy policy:"} />
                        </div><div className="w-full flex flex-col items-end justify-end max-tablet:pt-5">
                            <AdminSelectField name={"Date Format"} placeholder={"Placeholder Text"} label={"Date Format:"} />
                        </div>
                    </div>

                </div>
                <div className="w-full pt-5 ">
                    <table className='one-row-table max-desktop:hidden max-tablet:hidden'>
                        <tbody>
                            <tr>
                                <td className='w-[10%] text-black/70 font-[satoshi] font-[300px] text-[16px]' >ID</td>
                                <td className='w-[10%] text-black/70 font-[satoshi] font-[300px] text-[16px]'>Beneficiary Name</td>
                                <td className='w-[10%] text-black/70 font-[satoshi] font-[300px] text-[16px]'>Account No</td>
                                <td className='w-[10%] text-black/70 font-[satoshi] font-[300px] text-[16px]'>Bank Name</td>
                                <td className='w-[10%] text-black/70 font-[satoshi] font-[300px] text-[16px]'>IFSC</td>
                                <td className='w-[10%] text-black/70 font-[satoshi] font-[300px] text-[16px]'>Other Details</td>
                                <td className='w-[40%] text-black/70 font-[satoshi] font-[300px] text-[16px]'></td>
                            </tr>
                            <tr id="table-row">
                                <td className='text-black/80'>2044</td>
                                <td className='text-black/80'>AKA</td>
                                <td className='text-black/80' >123456789</td>
                                <td className='text-black/80'>SBI</td>
                                <td className='text-black/80'>SBIN0007881</td>
                                <td className='text-black/80'></td>
                                <td className='text-black/80'>
                                    <SuccessButton text={"Copy Row"} onClick={copyRowToClipboard} />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <table className='responsive-table desktop:hidden'>
                        <tbody>
                            <tr>
                                <th>ID</th>
                                <td className='text-black/80'>2044</td>
                            </tr>
                            <tr>
                                <th>Beneficiary Name</th>
                                <td className='text-black/80'>AKA</td>
                            </tr>
                            <tr>
                                <th>Account No</th>
                                <td className='text-black/80'>123456789</td>
                            </tr>
                            <tr>
                                <th>Bank Name</th>
                                <td className='text-black/80'>SBI</td>
                            </tr>
                            <tr>
                                <th>IFSC</th>
                                <td className='text-black/80'>SBIN0007881</td>
                            </tr>
                            <tr>
                                <th>Other Details</th>
                                <td className='text-black/80'></td>
                            </tr>
                            <tr>
                                <th></th>
                                <td className='text-black/80'>
                                    <SuccessButton text={"Copy Row"} onClick={copyRowToClipboard} />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className="w-full pt-5">
                    <InputField name={"transfer"} multiline
                        info
                        CustomInfoIcon={
                            <ErrorIcon
                                className="ms-1"
                                style={{
                                    color: "red",
                                    cursor: "pointer",
                                    height: "18px",
                                }}
                            />
                        }
                        infoText={"Please be careful while adding AD Path."}
                        rows={5}
                        placeholder="Placeholder text" label={"Transfer Details"} />
                </div>
                <div className="flex gap-3 pt-5">
                    <button onClick={() => navigate(-1)} className='w-[69px] content-stretch h-[32px] bg-[#F7F7F7]'>
                        <h1 className='text-[#000000] font-medium text-[14px] font-[satoshi]'>Cancel</h1>
                    </button>
                    <SuccessButton onClick={() => { }} text={"Mark as Paid"} />
                    <PrimaryButton onClick={() => { }}  >
                        <h1 className='text-white font-semibold font-[satoshi]'>Reject</h1>
                    </PrimaryButton>

                </div>

            </Form>

        </Formik>
    )
}

export default View
