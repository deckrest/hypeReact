import './HeaderMenu.css';

const HeaderMenu = () => { return (
    <>
        <header>
            <div className='menu'>
                <div>logo</div>
                <div className="menuButtons">
                    <a href="#">отзывы</a>
                    <a href="#">о нас</a>
                    <a href="#">контакты</a>
                </div>
            </div>
        </header>
    </>
  );
};
export default HeaderMenu;