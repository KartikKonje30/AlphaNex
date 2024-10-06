
import Accordion  from './Accordion'

const FaqsSection = () => {
    return (
        <section className="flex py-20 px-5 justify-center">
            <div className="container">
            <div>
            <h2 className='section-title flex justify-start px-2 lg:px-24'>FAQ's</h2>
            
            <div className="rounded-lg flex flex-col gap-2 items-center mt-4 p-2 lg:p-8 lg:px-28 justify-center">
            <Accordion title="Are there any minimum investment requirements for the listed portfolio's ?" answer="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt vero perferendis consequatur illum dolore deserunt fuga cupiditate atque nesciunt, a sed. Minima accusamus unde, ipsum maiores perspiciatis molestiae quibusdam ducimus.
            Ullam tenetur odit repellendus natus accusamus eligendi corrupti repellat iste cupiditate atque pariatur quo, ab at ea voluptatum blanditiis quod cumque doloribus qui accusantium ipsam voluptate alias. Tenetur, placeat consequuntur?" />
             <Accordion title="Item 1" answer="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt vero perferendis consequatur illum dolore deserunt fuga cupiditate atque nesciunt, a sed. Minima accusamus unde, ipsum maiores perspiciatis molestiae quibusdam ducimus.
            Ullam tenetur odit repellendus natus accusamus eligendi corrupti repellat iste cupiditate atque pariatur quo, ab at ea voluptatum blanditiis quod cumque doloribus qui accusantium ipsam voluptate alias. Tenetur, placeat consequuntur?" />
            <Accordion title="Item 1" answer="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt vero perferendis consequatur illum dolore deserunt fuga cupiditate atque nesciunt, a sed. Minima accusamus unde, ipsum maiores perspiciatis molestiae quibusdam ducimus.
            Ullam tenetur odit repellendus natus accusamus eligendi corrupti repellat iste cupiditate atque pariatur quo, ab at ea voluptatum blanditiis quod cumque doloribus qui accusantium ipsam voluptate alias. Tenetur, placeat consequuntur?" />
            <Accordion title="Item 1" answer="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt vero perferendis consequatur illum dolore deserunt fuga cupiditate atque nesciunt, a sed. Minima accusamus unde, ipsum maiores perspiciatis molestiae quibusdam ducimus.
            Ullam tenetur odit repellendus natus accusamus eligendi corrupti repellat iste cupiditate atque pariatur quo, ab at ea voluptatum blanditiis quod cumque doloribus qui accusantium ipsam voluptate alias. Tenetur, placeat consequuntur?" />
            
            </div>
            </div>
            </div>
            
        </section>
    )
}

export default FaqsSection;