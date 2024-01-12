import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import './creator.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useAPI from '../../hooks/useAPI';
import { URL_API } from '../../utils/constants';
import Loading from '../Loading/Loading';

export default function CreatorPage() {
  const { sendData, isLoading } = useAPI(`${URL_API}/posts`);

  const [formData, setFormData] = useState({
    banner: '',
    title: '',
    subtitle: '',
    author: '',
    content: '',
    tags: [],
    links: [],
  });

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    await e.preventDefault();
    await sendData(formData);
    if (isLoading === false) {
      console.log('redirect');
      navigate('/');
    }
  };

  return (
    <div className="create-container">
      { isLoading ? <Loading /> : (
        <form onSubmit={handleSubmit}>
          <div className="create-banner">
            <input
              required
              type="text"
              placeholder="URL de la portada"
              onChange={(e) => setFormData({ ...formData, banner: e.target.value })}
              name="banner"
              value={formData.banner}
            />
          </div>
          <div className="main-create">
            <div className="create-top-container">
              <input
                required
                name="title"
                value={formData.title}
                type="text"
                placeholder="Titulo"
                style={{ fontSize: '2rem', fontWeight: '600' }}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              />
              <div className="create-top-container-bottom">
                <input
                  required
                  name="subtitle"
                  onChange={(e) => setFormData({ ...formData, subtitle: e.target.value })}
                  value={formData.subtitle}
                  type="text"
                  placeholder="Subtitulo"
                  style={{ fontSize: '1.25rem', fontWeight: '400' }}
                />

                <input
                  required
                  type="text"
                  name="author"
                  onChange={(e) => setFormData({ ...formData, author: e.target.value })}
                  value={formData.author}
                  placeholder="Autor"
                  style={{ fontSize: '1.25rem', fontWeight: '600' }}
                />

              </div>
            </div>
            <div className="create-container-content">
              <ReactQuill
                required
                className="quill-area"
                theme="snow"
                value={formData.content}
                onChange={(e) => setFormData({ ...formData, content: e })}
              />
            </div>
            <div className="bottom">
              <input
                required
                type="text"
                name="tags"
                value={formData.tags}
                placeholder="Palabras clave"
                onChange={(e) => setFormData({ ...formData, tags: e.target.value.split(',') })}
              />
              <input
                required
                type="text"
                name="links"
                value={formData.links}
                placeholder="Links a tus fuentes"
                onChange={(e) => setFormData({ ...formData, links: e.target.value.split(',') })}
              />
              <button type="submit" className="btn-alert">Publicar</button>
            </div>
          </div>

        </form>
      )}

    </div>
  );
}
