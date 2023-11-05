import joi from "joi"

export const JoiSlide=joi.object({
    imgSlider:joi.string().required(),
    titleSlider:joi.string().required(),
    contentSlider:joi.string().required(),
    status:joi.boolean(),
})