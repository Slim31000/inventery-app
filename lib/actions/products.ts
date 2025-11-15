"use server"

import React from 'react'
import { getcurrentUser } from '../auth'
import prisma from '../prisma'

const deleteProduct = async(formData: FormData) => {
    const user =await getcurrentUser()
    const id = String(formData.get('id') || '')
    await prisma.product.deleteMany({where:{id:id ,userId: user.id}})

}

export default deleteProduct