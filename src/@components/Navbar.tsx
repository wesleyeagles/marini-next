'use client'
import useSmoothScroll from "@/@hooks/useSmoothScroll";
import { Poppins } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { Dialog } from "primereact/dialog";
import { Menubar } from "primereact/menubar";
import { MenuItem } from "primereact/menuitem";
import { Fragment, useRef, useState } from "react";
import { Bars3Icon, XMarkIcon, EnvelopeIcon, PhoneIcon, DevicePhoneMobileIcon, ClockIcon, MapPinIcon } from '@heroicons/react/24/outline';
import { Sidebar } from "primereact/sidebar";

import { contactFormSchema } from "@/@schemas/ContactFormSchema";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { InputMask } from "primereact/inputmask";
import { InputText } from "primereact/inputtext";
import { InputTextarea } from "primereact/inputtextarea";
import { Button } from "primereact/button";
import axios from "axios";
import { toast } from "react-toastify";

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

type CreateContactFormModal = z.infer<typeof contactFormSchema>

interface NavbarProps {
    visible: boolean;
    setVisible: React.Dispatch<React.SetStateAction<boolean>>
}

export default function Navbar({ visible, setVisible }: NavbarProps) {
    const { scrollToSection } = useSmoothScroll();

    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [isSending, setIsSending] = useState(false)

    const toastId = useRef<any>(null)

    const {
        handleSubmit,
        control,
        reset,
        formState: { errors },
    } = useForm<CreateContactFormModal>({
        resolver: zodResolver(contactFormSchema),
    })

    const formSubmit = async (data: CreateContactFormModal) => {
        setIsSending(true)
        toastId.current = toast.loading('Enviando email...', {
            autoClose: false,
            theme: 'colored',
        })

        try {
            const res = await axios.post('/api/contact-form', data)

            if (res.status === 200) {
                toast.update(toastId.current, {
                    render: 'Email enviado com sucesso',
                    type: 'success',
                    isLoading: false,
                    autoClose: 3000,
                    theme: 'colored',
                })

                setIsSending(false)

                reset({
                    email: '',
                    nome: '',
                    telefone: '',
                    mensagem: '',
                })
            }
        } catch (err) {
            toast.update(toastId.current, {
                render: 'Erro ao enviar email',
                type: 'error',
                isLoading: false,
                autoClose: 3000,
                theme: 'colored',
            })

            setIsSending(false)
        }
    }

    const items: MenuItem[] = [
        {
            label: 'Empreendimentos',
            items: [
                {
                    label: 'Em Andamento',
                    items: [
                        {
                            label: 'Terrace',
                            url: '/terrace'
                        },
                        {
                            label: 'San Paulo',
                            url: '/san-paulo'
                        },
                        {
                            label: 'Altos do Borgo',
                            url: '/altos-do-borgo'
                        }
                    ]
                },
                {
                    label: "Entregues",
                    url: '/empreendimentos-entregues'
                }
            ]
        }
    ];

    return (
        <Fragment>
            <div className="bg-white py-4">
                <nav className="max-w-7xl mx-auto px-10">
                    <div className="flex justify-between items-center">
                        <div>
                            <Link href='/'>
                                <Image src='/logo-marini.png' width={150} height={50} alt="Logo Marini" />
                            </Link>
                        </div>

                        <div className="hidden lg:flex">
                            <ul className="flex gap-8">
                                <li className="font-[500] text-sm text-gray-900"><Link href='/'>Página Inicial</Link></li>
                                <li className="font-[500] text-sm text-gray-900"><span className="cursor-pointer" onClick={() => scrollToSection('sobre-nos')}>Sobre Nós</span></li>
                                <Menubar className={poppins.className} pt={{
                                    root: {
                                        className: 'bg-white p-0 text-sm leading-3',
                                    },
                                    submenu: {
                                        className: 'bg-white p-3',
                                    },
                                    menuitem: {
                                        className: 'text-gray-900',
                                    },
                                    action: {
                                        className: 'p-0 text-gray-900',
                                    },
                                }} model={items} />
                                <li className="font-[500] text-sm text-gray-900"><span className="cursor-pointer" onClick={() => setVisible(true)}>Contato</span></li>
                            </ul>
                        </div>

                        <div className="lg:hidden h-9">
                            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                                {mobileMenuOpen ? (
                                    <XMarkIcon className="h-6 w-6 text-gray-900" />
                                ) : (
                                    <Bars3Icon className="h-9 w-9 text-gray-900" />
                                )}
                            </button>
                        </div>
                    </div>
                </nav>
            </div>

            <Sidebar className="w-[15rem]" position="right" visible={mobileMenuOpen} onHide={() => setMobileMenuOpen(false)}>
                {mobileMenuOpen && (
                    <div className="lg:hidden bg-white p-4">
                        <ul className="flex flex-col gap-4">
                            <li className="font-[500] text-sm text-gray-900"><Link href='/'>Página Inicial</Link></li>
                            <li className="font-[500] text-sm text-gray-900"><span className="cursor-pointer" onClick={() => { scrollToSection('sobre-nos'); setMobileMenuOpen(false); }}>Sobre Nós</span></li>
                            <li className="font-[500] text-sm text-gray-900"><span className="cursor-pointer" onClick={() => setVisible(true)}>Contato</span></li>
                            <Menubar className={poppins.className} pt={{
                                root: {
                                    className: 'bg-white p-0 text-sm leading-3',
                                },
                                submenu: {
                                    className: 'bg-white p-3',
                                },
                                menuitem: {
                                    className: 'text-gray-900',
                                },
                                action: {
                                    className: 'p-0 text-gray-900',
                                },
                            }} model={items} />
                        </ul>
                    </div>
                )}
            </Sidebar>

            <Dialog className="max-w-[90%] sm:max-w-full" pt={{
                header: {
                    className: 'p-0 hidden',
                },
                closeButton: {
                    className: 'relative z-20 text-white',
                },
                content: {
                    className: 'p-0 rounded-md',
                },
            }} visible={visible} onHide={() => setVisible(false)}>
                <div className="grid md:grid-cols-2">
                    <div className="relative">
                        <div className="absolute inset-0">
                            <Image src="/bg-modal.png" alt='Background do Modal' layout="fill" objectFit="cover" quality={100} />
                        </div>
                        <div className="relative z-20 p-4 sm:p-6 md:p-10 lg:p-20">
                            <h2 className="text-white text-2xl md:text-4xl md:max-w-[16rem] font-medium leading-10 md:mb-10">Informações de contato</h2>

                            <ul className="max-w-full sm:max-w-[32rem] md:max-w-[19.5rem]">
                                <li className="text-white flex items-center gap-2 my-4 md:my-7 text-xs md:text-sm"><EnvelopeIcon className="w-4 md:w-6 h-4 md:h-6" /> imoveis@mariniconstrucoes.com.br</li>
                                <li className="text-white flex items-center gap-2 my-4 md:my-7 text-xs md:text-sm"><PhoneIcon className="w-4 md:w-6 h-4 md:h-6" /> 54 3452.2244</li>
                                <li className="text-white flex items-center gap-2 my-4 md:my-7 text-xs md:text-sm"><DevicePhoneMobileIcon className="w-4 md:w-6 h-4 md:h-6" /> 54 99910.6006</li>
                                <li className="text-white flex items-center gap-2 my-4 md:my-7 text-xs md:text-sm"><div><MapPinIcon className="w-4 md:w-6 h-4 md:h-6 md:mb-9" /></div> R. Fernandes Viêira, 146 - Sala 03 - Cidade Alta, Bento Gonçalves - RS, 95700-372</li>

                                <span className="text-white font-bold md:text-lg">Funcionamento</span>

                                <li className="text-white flex items-center gap-2 my-5 text-xs md:text-sm"><ClockIcon className="w-4 md:w-6 h-4 md:h-6" /> 08h às 11:30h, 13h às 17h de seg. a sexta</li>
                            </ul>
                        </div>
                    </div>

                    <div className="p-4 sm:p-6 md:p-8 lg:p-20 relative">
                        <div onClick={() => setVisible(false)} role="button" className="absolute right-2 top-2">
                            <XMarkIcon className="w-6 h-6" />
                        </div>
                        <h2 className="text-black sm:text-2xl md:text-4xl font-medium leading-10 sm:mb-3 md:mb-7">Entre em contato</h2>
                        <p className="max-w-full md:max-w-[20.2rem] text-xs sm:text-sm md:text-base">Preencha o <span className="font-bold text-[#3E5481]">formulário abaixo</span> e aguarde o retorno de nossos especialistas.</p>

                        <form className="w-full mt-3 md:mt-10" onSubmit={handleSubmit(formSubmit)}>
                            <fieldset disabled={isSending} className="flex flex-col gap-2">
                                <Controller
                                    control={control}
                                    name="nome"
                                    render={({ field }) => (
                                        <div>
                                            <InputText
                                                placeholder="Nome"
                                                pt={{
                                                    root: {
                                                        className: `w-full border ${errors.nome ? 'border-red-400' : 'border-gray-300'} rounded-md py-2 md:py-3 px-2 text-xs md:text-sm shadow-none`,
                                                    }
                                                }} {...field} />
                                            {errors.nome && <small className="text-xs text-red-400 ml-1">{errors.nome.message}</small>}
                                        </div>
                                    )}
                                />

                                <Controller
                                    control={control}
                                    name="email"
                                    render={({ field }) => (
                                        <div>
                                            <InputText
                                                placeholder="Email"
                                                pt={{
                                                    root: {
                                                        className: `w-full border ${errors.email ? 'border-red-400' : 'border-gray-300'} rounded-md py-2 md:py-3 px-2 text-xs md:text-sm shadow-none`,
                                                    }
                                                }} {...field} />
                                            {errors.email && <small className="text-xs text-red-400 ml-1">{errors.email.message}</small>}
                                        </div>
                                    )}
                                />

                                <Controller
                                    control={control}
                                    name="telefone"
                                    render={({ field }) => (
                                        <div>
                                            <InputMask placeholder="Telefone" mask="(99) 9999-9999" pt={{
                                                root: {
                                                    className: `w-full border ${errors.telefone ? 'border-red-400' : 'border-gray-300'} rounded-md py-2 md:py-3 px-2 text-xs md:text-sm shadow-none`,
                                                }
                                            }} {...field} />
                                            {errors.telefone && <small className="text-xs text-red-400 ml-1">{errors.telefone.message}</small>}
                                        </div>
                                    )}
                                />

                                <Controller
                                    control={control}
                                    name="mensagem"
                                    render={({ field }) => (
                                        <div>
                                            <InputTextarea placeholder="Escreva sua mensagem" autoResize pt={{
                                                root: {
                                                    className: `w-full border ${errors.mensagem ? 'border-red-400' : 'border-gray-300'} rounded-md py-2 md:py-3 px-2 text-xs md:text-sm shadow-none`,
                                                }
                                            }} {...field} />
                                            {errors.mensagem && <small className="text-xs text-red-400 ml-1">{errors.mensagem.message}</small>}
                                        </div>
                                    )}
                                />

                            </fieldset>
                            <div className="flex justify-end mt-1">
                                <Button disabled={isSending} pt={{
                                    root: {
                                        className: `bg-[#3C5F89] hover:bg-[#3F5481] text-white px-8 py-3 uppercase font-medium text-xs md:text-sm`,
                                    }
                                }}>Enviar</Button>
                            </div>

                        </form>
                    </div>
                </div>
            </Dialog>
        </Fragment>
    );
}
