import Autehnticated from "@/Layouts/Authenticated";
import React from "react";
import { Head, useForm } from "@inertiajs/react";
import ValidationError from "@/Components/ValidationError";
import Label from "@/Components/Label";
import Input from "@/Components/Input";
import Checkbox from "@/Components/Checkbox";
import Button from "@/Components/Button";
import { router } from "@inertiajs/react";

export default function Edit({ auth, movie }) {
    const { data, setData, processing, errors } = useForm({
        ...movie,
    });

    const handleOnChange = (event) => {
        setData(
            event.target.name,
            event.target.type === "file"
                ? event.target.files[0]
                : event.target.value
        );
    };

    const submit = (e) => {
        e.preventDefault();
        if (data.thumbnail === movie.thumbnail) {
            delete data.thumbnail;
        }
        router.put(route("admin.dashboard.movie.update", movie.id), {
            method: "PUT",
            ...data,
        });
    };

    return (
        <>
            <Autehnticated auth={auth}>
                <Head title="Admin - Update Movie" />
                <h1 className="text-xl">Update Movie: {movie.name}</h1>
                <hr className="mb-4" />
                <ValidationError errors={errors} />
                <form onSubmit={submit}>
                    <Label forInput="name" value="Name" />
                    <Input
                        type="text"
                        name="name"
                        defaultValue={movie.name}
                        variant="primary-outline"
                        placeholder="Enter the name of the movie"
                        isError={errors.name}
                        handleChange={handleOnChange}
                    />
                    <Label
                        forInput="category"
                        value="Category"
                        className="mt-4"
                    />
                    <Input
                        type="text"
                        name="category"
                        defaultValue={movie.category}
                        variant="primary-outline"
                        placeholder="Enter the category of the movie"
                        isError={errors.category}
                        handleChange={handleOnChange}
                    />
                    <Label
                        forInput="video_url"
                        value="Video URL"
                        className="mt-4"
                    />
                    <Input
                        type="url"
                        name="video_url"
                        defaultValue={movie.video_url}
                        variant="primary-outline"
                        placeholder="Enter the video url of the movie"
                        isError={errors.video_url}
                        handleChange={handleOnChange}
                    />
                    <Label
                        forInput="thumbnail"
                        value="Thumbnail"
                        className="mt-4"
                    />
                    <img
                        src={`/storage/${movie.thumbnail}`}
                        alt=""
                        className="w-40"
                    />
                    <Input
                        type="file"
                        name="thumbnail"
                        variant="primary-outline"
                        placeholder="Insert thumbnail of the movie"
                        isError={errors.thumbnail}
                        handleChange={handleOnChange}
                    />
                    <Label forInput="rating" value="Rating" className="mt-4" />
                    <Input
                        type="number"
                        name="rating"
                        defaultValue={movie.rating}
                        variant="primary-outline"
                        placeholder="Enter the rating of the movie"
                        isError={errors.rating}
                        handleChange={handleOnChange}
                    />
                    <div className="flex flex-row mt-4 items-center">
                        <Label
                            forInput="is_featured"
                            value="Is Featured"
                            className="mr-3 mt-2"
                        />
                        <Checkbox
                            name="is_featured"
                            handleChange={(e) =>
                                setData("is_featured", e.target.checked)
                            }
                            checked={movie.is_featured}
                        />
                    </div>
                    <Button
                        type="submit"
                        className="mt-4"
                        processing={processing}
                    >
                        Save
                    </Button>
                </form>
            </Autehnticated>
        </>
    );
}
